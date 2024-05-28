# stan-test-api
stan test for interview

**mock API**
https://my-json-server.typicode.com/stan-alam/stan-test-api/

example resource 

https://my-json-server.typicode.com/stan-alam/stan-test-api/authtoken


```text
First we cover the basic API functionality (happy path).
Screencaptures are displayed to show that the API is behaving with basic CRUD operations
For demonstration purposes we are using the assertion library provided with Postman/Newman
The test plan for basic functionality - happy path and some negative tests are also attached
```
Links to Screencaptures for GET, POST, PUT, DELETE

GET
https://github.com/stan-alam/stan-test-api/blob/develop/images/01.png

POST
https://github.com/stan-alam/stan-test-api/blob/develop/images/02.png

PUT
https://github.com/stan-alam/stan-test-api/blob/develop/images/PUTS_resource.png

DELETE
https://github.com/stan-alam/stan-test-api/blob/develop/images/delete_resource.png



```text
here we are using GET and parsing out a dummy JWT, we are also assigning the jwt to variable so we can use in the subsequent test
```

```ascii
GET
https://my-json-server.typicode.com/stan-alam/stan-test-api/authtoken

```

<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/01.png"width="125%" height="125%">
</p>


```js
jwt = pm.response.json().jwt;
console.log(jwt);

// Verify the length of the JWT
pm.test("The length of the JWT must be greater than zero", function () {
    const jwt = pm.response.json().jwt;
    pm.expect(jwt.length).to.be.greaterThan(0, "JWT should not be empty");
});

// verify the header of the JWT
pm.test("the JWT must have the correct header", function () {
     pm.expect(pm.response.json().jwt).contains("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
});

pm.collectionVariables.set("authToken", jwt);
collectionJWT = pm.collectionVariables.get(pm.response.json().jwt);

pm.globals.get(pm.response.json().jwt);
let AuthToken = pm.globals.set("authToken", pm.response.json().jwt);


pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response Content-Type header is 'application/json'", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


pm.test("Jwt should not be empty", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData.jwt).to.exist.and.to.not.be.empty;
});


pm.test("Jwt has a valid format", function () {
  const responseData = pm.response.json();
  
  pm.expect(responseData.jwt).to.be.a('string');
  pm.expect(responseData.jwt).to.match(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/);
})
```


<p align="center">
  <img src="https://github.com/stan-alam/stan-test-api/blob/master/images/02.png"width="125%" height="125%">
</p>

```ascii
POST
https://my-json-server.typicode.com/stan-alam/stan-test-api/posts

```

**Assertions are provided using POSTMAN and Reporting via Newman**

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

**Observe(above) that we are passing the parsed authToken from the prior GET request to the subsequent POST request**

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

Test can be run turnkey (on demand) or through an automated build trigger

## Functional Test Plan

**check to see if there is Open API specification or Swagger.io (this may or may not be the source of truth)

 Cover all CRUD operations for Happy Path

1. Validate all status codes are correct 

2. Test against HTTP, HTTPS

3. Validate API endpoints with resources

4. Validate response bodies are returned properly as expected


Cover Negative Testing



Sample Test Case

Story:

    As an admin I would like multi tenanant access to my application. Each Tenant should have access to their own data

    Given
    When
    Then

# Performance Test Strategy

## Are we meeting the Service level agreement (SLA)?  


**Why are we performance testing :**

    
    i.e. 
    • Availability 
    • Response Time
    • Throughput
    • Errors
    • Utilization
    • Latency

**What are we testing :**
    Speed and responsiveness

    Scalability

    Throughput

    Latency

    Soak

    Saturation

    - What metrics are we collecting?


## Performance Test Automation Plan




## Performance Test Case


--------------------

Tools

--------------------


| Name | Open Source | Scripting Interface | Workload Distribution- Scalability | SUT Resource monitoring |
| --- | --- | --- | --- | --- |
| BeesWithMachineGuns | Yes | User scripts invoked through Bash | Configured by user,<br><br>homogenous( scalable for cloud architecture )Linux | none |
| Apache JMeter | Yes | GUI/Recording – scripts using external JARs | Programmable by user, heterogeneous(any OS) Scalable through configuration | none |
| Multi-Mechanize | Yes | Python scripting, Reporting is extensible through Python libraries, | Programmable by user heterogeneous, Scalable through configuration | none |
| Locust.io | Yes | Python scripting, Reporting is extensible through Python libraries, browser based GUI | Programmed by user heterogeneous | none |
| Load Runner | No  | GUI to edit actions by using predefined templates, script editing | Programmable by user both homogenous and heterogamous(single OS, Windows) | System monitors and diagnostics modules |
| WebLoad | No  | Javascript, Visual GUI | Automated, GUI, heterogeneous | Memory CPU, throughput |
| MS Visual Studio | No  | GUI available to edit actions, and extensible | Programmable by user both homogenous and heterogamous(single OS, Windows) | Performance counters collected on SUT |
| AppPerfect Load Tester | No  | GUI to edit actions, and | Automated, heterogeneous(many OS types) | Integrated monitoring of target machine’s system resources |
| Rational Performance Tester | No  | Scripting(Rational Library based) | Programmable by user, heterogeneous (many OS types) | Capture communication for HTTP, SQL |
| OpenLoad | No  | Web based importing data from Excel tables | Programmable by user, heterogeneous | none |
| SoapUI | Yes | Groovy scripting | Programmable by user, heterogeneous(any OS) Scalable through configuration | none |
| Silk Performer | No  | Workload editor/ importing Junit | Automated(based on an agent health system), heterogenous | none |
| Artillery IO \*js | Yes | Javascript - Could be run via CLI | Configured by user,<br><br>homogenous( scalable for cloud architecture )Linux or Windows | HTTP<br><br>Socket.IO<br><br>WebSockets<br><br>Exstensible API |
| K6  | Yes | goja programming language, which is an implementation of ES2015(ES6) JavaScript on pure Golang | Scalable for cloud architectures (developer centric) | Extensible |

\*The performance of the test system is enhanced through scalability over multiple test nodes.
## Performance Test Automation Requirements

**The performance test framework should be modular and scalable**

Automation scripts should scale 


**Architecture**

