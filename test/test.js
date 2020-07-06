const assert = require('assert');
const got = require('got');
const _ = require('underscore');
const server = require('../server');

describe("Login", async () => {
    it("should return {success:true, data:some token} for good creds", async () => {
        let result = await got("http://localhost:8080/api/login",{
            body:JSON.stringify({
                username:"test",
                password:"test"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(body.success && body.data && body.data.token !=null)
    })
    it("should return {successs: false, data:null} for bad creds", async ()=>{
        let result = await got("http://localhost:8080/api/login",{
            body:JSON.stringify({
                username:"not_test",
                password:"invalid_pass"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(!body.success && body.data==null)
    })
})

describe("Register", async ()=>{
    it("should allow a new, unique user to register", async ()=>{
        let result = await got("http://localhost:8080/api/register",{
            body:JSON.stringify({
                username:"not_test",
                password:"pass",
                extrapass:"pass"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(body.success && body.data==null)
    })
    it("should allow a new, unique user to register", async ()=>{
        let result = await got("http://localhost:8080/api/register",{
            body:JSON.stringify({
                username:"not_test",
                password:"pass",
                extrapass:"pass"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(body.success && body.data==null)
    })
    it("should not allow a user with mismatching passwords to register", async ()=>{
        let result = await got("http://localhost:8080/api/register",{
            body:JSON.stringify({
                username:"not_test",
                password:"pass",
                extrapass:"pass_"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(!body.success && (body.data==="Password mismatch"))
    })
    it("should not allow an existing username to register",  async()=>{
        let result = await got("http://localhost:8080/api/register",{
            body:JSON.stringify({
                username:"test",
                password:"pass",
                extrapass:"pass"
            }),
            method: 'POST',
            headers:{
                "content-type":"application/json"
            }
        })
        let body = JSON.parse(result.body);
        assert(!body.success && (body.data==="Username exists"))
    })
})

describe("Authentication Middleware", ()=>{
    it("should not allow api requests without token", async ()=>{
        let result = await got("http://localhost:8080/api/quote_history",{
            method: 'GET',
            headers:{
                "content-type":"application/json",
                "cookie":""
            }
        })
        let body = JSON.parse(result.body);
        assert(!body.success && body.data=="No token")
    })
    it("should not allow api requests with an *invalid* token", async ()=>{
        let result = await got("http://localhost:8080/api/quote_history",{
            method: 'GET',
            headers:{
                "content-type":"application/json",
                "cookie":"token=NOTVALIDLOL"
            }
        })
        let body = JSON.parse(result.body);
        assert(!body.success && body.data=="Invalid token")
    })
})

describe("History", async () => {
  it("Should return expected history", async () => {
    let history = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const expectedHistory = [
      {
        username: "test",
        id: 1,
        gallonsRequested: "5",
        deliveryAddress: "0005 Example Dr",
        deliveryDate: "6/28/2020",
        suggestedPrice: "1",
        totalPrice: "5",
      },
      {
        username: "test",
        id: 2,
        gallonsRequested: "10",
        deliveryAddress: "0010 Example St",
        deliveryDate: "6/30/2020",
        suggestedPrice: "2",
        totalPrice: "20",
      },
    ];
    assert(history.body == JSON.stringify(expectedHistory));
  });
  it("Should not return incorrect history", async () => {
    let history = await got("http://localhost:8080/api/quote_history", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const notexpectedHistory = [
      {
        username: "test2",
        id: 1,
        gallonsRequested: "5",
        deliveryAddress: "0005 Example Dr",
        deliveryDate: "6/28/2020",
        suggestedPrice: "1",
        totalPrice: "5",
      },
      {
        username: "test",
        id: 2,
        gallonsRequested: "10",
        deliveryAddress: "0010 Example St",
        deliveryDate: "6/30/2020",
        suggestedPrice: "2",
        totalPrice: "20",
      },
    ];
    assert(history.body != JSON.stringify(notexpectedHistory));
  });
});

describe("Profile", async () => {
  it("Should return expected profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_info", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const expectedProfile = {
      fullName: "Johnny Appleseed",
      addr1: "123 Apple Way",
      addr2: "Apt A",
      city: "Blossom",
      state: "Virginia",
      zip: "12345",
    };
    assert(profile.body == JSON.stringify(expectedProfile));
  });
  it("Should not return incorrect profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_info", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const notexpectedProfile = {
      fullName: "Johnny Lemonseed",
      addr1: "123 Lemon Way",
      addr2: "Apt A",
      city: "Blossom",
      state: "Virginia",
      zip: "12345",
    };
    assert(profile.body != JSON.stringify(notexpectedProfile));
  });
  it("Should accept a new profile", async () => {
    let profile = await got("http://localhost:8080/api/profile_update", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    assert(profile.statusCode === 200 && profile.body == "Profile Update Success");
  })
});

describe("Fuel Quote", async () => {
  it("Should return expected fuel quote", async () => {
    let fuel_quote = await got("http://localhost:8080/api/fuel_quote", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const expectedfuel_quote = {
      price: 100,
    };
    assert(fuel_quote.body == JSON.stringify(expectedfuel_quote));
  });
  it("Should not return incorrect fuel quote", async () => {
    let fuel_quote = await got("http://localhost:8080/api/fuel_quote", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie:
          "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCJ9LCJpYXQiOjE1OTM5OTU2NzcsImV4cCI6MTU5NDA4MjA3N30.TXcORmTYd9Iade3hBy4WqvwXMheuWWidQuYR4_XQSXc",
      },
    });
    const notexpectedfuel_quote = {
      price: 200,
    };
    assert(fuel_quote.body != JSON.stringify(notexpectedfuel_quote));
  });
});
