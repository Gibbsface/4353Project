const assert = require('assert');
const got = require('got');
const _ = require('underscore');

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