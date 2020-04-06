# SpringRestAPI

A REST API-driven Web Application using Spring Boot (Java) and testing with Serenity BDD.

## Getting Started

### Clone repository:
1. From your intended location, run: ```git clone git@github.com:acary/SpringRestAPI.git```
2. CD to the folder

## Run Mongo Daemon:
Ensure you have MongoDB installed and run the daemon in a separate terminal window:
1. Run:  ```mongod```

## Run app:
Launch Spring Boot application in a separate terminal window.
1. Run:  ```./gradlew bootRun```

## Run tests:
Run tests in a separate terminal window.
1. Run: ```gradle test aggregate``` (or ```./gradlew test```)
2. View Serenity report (see location printed to terminal window): ```file:///.../restapi/target/site/serenity/index.html```

## Interact using Postman:
Send API requests to the local and production web applications.
1. GET: ```localhost:8080/hello```
2. GET: ```localhost:8080/greeting```
3. GET: ```localhost:8080/hotels/all```
