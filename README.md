### How To Run:

First, install the dependencies

### 1. `npm install`

Run with development mode

### 2. `npm run dev`

Run Production mode

### 3. `npm start`

Run the test

### 3. `npm run test`

### Run with Docker

First, build the docker image first

### 1. `docker build -t itommey-test:latest .`

Second, create the container

### 2. `docker container create -p 3011:3011 --name itommey-test itommey-test:latest`

Last, Start the container

### 3. `docker container start itommey-test`

Hit http request with postman or anything else to http://127.0.0.1:3011/itommey with POST Request and add the body with like this

{
"data": [1,4,2,11,235,123]
}

You will get return of sorted array
