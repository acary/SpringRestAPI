# SpringRestAPI

A REST API Web Application using Spring Boot (Java) for the backend, React for the frontend, and testing with Serenity BDD, Selenium and JUnit.

## Getting Started

### Clone repository:
1. From your intended location, run: ```git clone git@github.com:acary/SpringRestAPI.git restapi```
2. cd to the project folder: ```cd restapi```

## ~~Run Mongo Daemon~~:
Since we are connecting to MongoDB Atlas (cloud), local Mongo daemon is no longer needed.

~~Ensure you have MongoDB installed and run the daemon in a separate terminal window~~

See: `application.properties` file in `src/main/resources` for connection string (provided by Atlas).

## Run tests:
Run tests in a separate terminal window.
1. From project folder, run: ```gradle test aggregate``` (or ```./gradlew test```)
2. View Serenity report (see location printed to terminal window): ```file:///.../restapi/target/site/serenity/index.html```
3. Selenium: TBD
4. JUnit: TBD

## Frontend: Update React app:
Note: `build.gradle` file includes Node plugin (built by project gradle)
1. cd to frontend folder:  ```cd frontend```
2. Make changes, i.e. in ```src``` or ```src/components```
3. Rebuild: ```npm start```
4. Assemble: ```gradle assemble```

## Backend: Clean and run Spring Boot app:
5. cd to parent (project folder): ```cd ..```
6. Clean project gradle: ```./gradlew clean```
7. Assemble: ```gradle assemble```
8. Run locally:  ```./gradlew bootRun```
9. View locally: ```http://localhost:8080/```

# Deploy to Pivotal Cloud Foundry:
See ```manifest.yml``` for configuration (authentication required).
1. Run: ```cf push``` 
2. View: ```http://reactboot.cfapps.io/```

## Test using Selenium, Postman, cURL:
Example endpoints for testing:

##### http://reactboot.cfapps.io/
- '/' 
- '/tasks'
- '/users'

