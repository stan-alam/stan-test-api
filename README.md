# stan-test-api
stan test for interview

```text
First we cover the basic API functionality (happy path).
Screencaptures are displayed to show that the API is behaving in basic CRUD operations
For demonstration purposes we are using the assertion library provided with Postman/Newman
The test plan for basic functionality - happy path and some negative tests are also attached
```

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/01.png"width="125%" height="125%">
</p>

```text
here we are using GET and parsing out a dummy JWT, we are also assigning the jwt to variable so we can use in the subsequent test
```

```js
//GET
https://my-json-server.typicode.com/stan-alam/stan-test-api/authtoken

```
<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/02.png"width="125%" height="125%">
</p>

```js

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(201);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("2");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.collectionVariables.get(authToken);
console.log("this is the authTokn " + pm.responseData)

```

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/03.png"width="125%" height="125%">
</p>

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/04.png"width="125%" height="125%">
</p>

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/05.png"width="125%" height="125%">
</p>

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/2024-05-27%2020_20_15-_newman%20run%20Interview-test.postman_c%20-%20Notepad.png"width="125%" height="125%">
</p>

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/newman01.gif"width="125%" height="125%">
</p>

