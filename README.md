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

## Performance Test Strategy

Speed and responsiveness

Scalability

Throughput

Latency

Soak

Saturation

Are we meeting the Service level agreement (SLA)? 
    - What metrics are we collecting?


• Availability 
• Response Time
• Throughput
• Errors
• Utilization
• Latency

Overall stability


---------------------------

Tools

* see tool assment matrix


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

\*The performance of the test system is enhanced through scalability over multiple test nodes. LoadRunner does

-------------------

## Performance Automation Test Plan