const assert = require("assert");
const got = require("got");
const _ = require("underscore");
const server = require("../server");
let jwt = require("jsonwebtoken");
const { doesNotMatch } = require("assert");

let token = "";

describe("Login", async () => {
  it("should return {successs: false, data:\"Wrong Password\"} for wrong password", async () => {
    let result = await got("http://localhost:8080/api/login", {
      body: JSON.stringify({
        username: "test2",
        password: "invalid_pass",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "Wrong password");
  });
  it("should return {successs: false, data:\"No such user\"} for invalid username", async () => {
    let result = await got("http://localhost:8080/api/login", {
      body: JSON.stringify({
        username: "not_an_account",
        password: "invalid_pass",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "No such user");
  });
  it("should return {success:true, data:some token} for good creds", async () => {
    let result = await got("http://localhost:8080/api/login", {
      body: JSON.stringify({
        username: "test",
        password: "test",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    token = body.data.token;
    assert(body.success && body.data && body.data.token != null);
  });
});

describe("Register", async () => {
  it("should allow a new, unique user to register", async () => {
    let result = await got("http://localhost:8080/api/register", {
      body: JSON.stringify({
        username: new Date().getTime().toString(),
        password: "pass",
        repassword: "pass",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    assert(body.success && body.data == null);
  });
  it("should not allow a user with mismatching passwords to register", async () => {
    let result = await got("http://localhost:8080/api/register", {
      body: JSON.stringify({
        username: "not_test",
        password: "pass",
        repassword: "pass_",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "Password mismatch");
  });
  it("should not allow an existing username to register", async () => {
    let result = await got("http://localhost:8080/api/register", {
      body: JSON.stringify({
        username: "test",
        password: "pass",
        repassword: "pass",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    let body = JSON.parse(result.body);
    //console.log(body.data);
    assert(!body.success && body.data === "Username exists");
  });
});

describe("Authentication Middleware", () => {
  it("should not allow api requests without token", async () => {
    let result = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie: "",
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "No token");
  });
  it("should not allow api requests with an *invalid* token", async () => {
    let result = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie: "token=NOTVALIDLOL",
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "Invalid token");
  });
  it("should not allow api requests with a malicously crafted token", async () =>{
    let maliciousToken = jwt.sign("invalid data", "secret");
    let result = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie: `token=${maliciousToken}`,
      },
    });
    let body = JSON.parse(result.body);
    assert(!body.success && body.data == "Invalid token");
  })
});

describe("History", async () => {
  it("Should return expected history", async () => {
    let history = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedHistory = [
      {
        id: "test",
        quote_id: 3,
        gallons_requested: 3,
        address_1: "newaddr1",
        delivery_date: "2020-06-28",
        suggested_price: 1,
        total_amount_due: 5,
      },
      {
        id: "test",
        quote_id: 1,
        gallons_requested: 1,
        address_1: "newaddr1",
        delivery_date: "2020-06-28",
        suggested_price: 1,
        total_amount_due: 5,
      },
    ];
    // console.log(history.body);
    // console.log(JSON.stringify(expectedHistory));
    console.log(
      "  NOTICE: The sql statement must be rerun for this check to pass!"
    );
    assert(history.body == JSON.stringify(expectedHistory));
  });
});

describe("Profile", async () => {
  it("Should return expected profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_info", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedProfile = [
      {
        id: "test",
        name: "Test Testerson",
        addr1: "0005 Example Dr",
        addr2: "",
        city: "Houston",
        state: "TX",
        zip: 77204
      },
    ];
    // console.log(profile.body);
    // console.log(JSON.stringify(expectedProfile));
    assert(profile.body == JSON.stringify(expectedProfile));
  });
  it("Should update profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_update", {
      body: JSON.stringify([
        {field: "name", value: "newname"},
        {field: "addr1", value: "newaddr1"},
        {field: "addr2", value: "newaddr2"},
        {field: "city", value: "newcity"},
        {field: "state", value: "TX"},
        {field: "zip", value: 12345}
      ]),
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    let body = JSON.parse(profile.body);
    //console.log(body);
    assert(body.success && body.data == null);
  });
  it("Should return updated profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_info", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedProfile = [{
      id: "test",
      name: "newname",
      addr1: "newaddr1",
      addr2: "newaddr2",
      city: "newcity",
      state: "TX",
      zip: 12345
    }];
    // console.log(profile.body);
    // console.log(JSON.stringify(expectedProfile));
    assert(profile.body == JSON.stringify(expectedProfile));
  });
});

describe("Fuel Quote", async () => {
  it("Should return expected fuel quote", async () => {
    let fuel_quote = await got("http://localhost:8080/api/fuel_quote", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedfuel_quote = [
      {
        addr1: "newaddr1",
      },
    ];
    // console.log(fuel_quote.body);
    // console.log(JSON.stringify(expectedfuel_quote));
    assert(fuel_quote.body == JSON.stringify(expectedfuel_quote));
  });
});

describe("Fuel Quote Post", async () => {
  it("Should post fuel quote", async () => {
    let fuel_quote = await got("http://localhost:8080/api/fuel_quote_post", {
      body: JSON.stringify({
        gallons_requested: 100,
        delivery_date: "2020-07-11",
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    console.log(
      "  NOTICE: The sql statement must be rerun for the secondary check to pass!"
    );
  });
  it("Should return history with fuel quote post", async () => {
    let history = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedHistory = [
      {
        id: "test",
        quote_id: 3,
        gallons_requested: 3,
        address_1: "newaddr1",
        delivery_date: "2020-06-28",
        suggested_price: 1,
        total_amount_due: 5,
      },
      {
        id: "test",
        quote_id: 1,
        gallons_requested: 1,
        address_1: "newaddr1",
        delivery_date: "2020-06-28",
        suggested_price: 1,
        total_amount_due: 5,
      },
    ];
    // console.log(history.body);
    // console.log(JSON.stringify(expectedHistory));
    assert(history.body == JSON.stringify(expectedHistory));
  });
});

describe("Pricing Module", async () => {
  it("Should return expected Pricing Module", async () => {
    let pricing_module = await got("http://localhost:8080/api/pricing_module", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          `token=${token}`,
      },
    });
    const expectedpricing_module = 0.01;
    console.log(pricing_module.body);
    console.log(JSON.stringify(expectedpricing_module));
    assert(pricing_module.body == JSON.stringify(expectedpricing_module));
  });
});
