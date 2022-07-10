# GraphQL Service

> GraphQL wrapper for the REST music service.

#### How to run ⚡

* Run REST service
  - clone from [REST-service-repo](https://github.com/rolling-scopes-school/node-graphql-service)
  - rename `env.example` to `.env` in each microservice
  - run `npm install` from root directory
  - install docker due to your OS
  - run to start mongo container
  ```
  docker run -d
    -p 27888:27017
    --name some-mongo
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin
    -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
  ```

* Run GraphQL service
  - clone this repo
  - rename `env.example` to `.env`
  - run `npm install`
  - run `npm run start`
