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

```ascii
GET
https://my-json-server.typicode.com/stan-alam/stan-test-api/authtoken

```
<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/02.png"width="125%" height="125%">
</p>

```ascii
POST
https://my-json-server.typicode.com/stan-alam/stan-test-api/posts

```

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

```cli
newman run Interview-test.postman_collection.json -r htmlextra --reporter-htmlextra-export
```

## Test Strategy for Automation

* Who
* What
* Where
* When
* Why
* How

Test Framework
What is already automated ?
What can be automated ?
    e.g. can be quickly integrated into CI/CD - e.g. automated smoke test? health checks, fast feedback loop

What is the MVP? Does the MVP need to be broken down into epics or stories?

Framework needs to be exstensible and light weight

Automated tests should run parallel to save time

Tests should be self-contained and fail gracefully

Test can be run turnkey (on demand) or through a build trigger

## Functional Test Plan

**check to see if there is Open API specification or Swagger.io (this may or may not be the source of truth)

 Cover all CRUD operations for Happy Path

1. Validate all status codes are correct 

2. Test against HTTP, HTTPS

3. Validate API endpoints with resources

4. Validate response bodies are returned properly as expected


Cover Negative Testing



Sample Test Case




## Performance Test Plan

