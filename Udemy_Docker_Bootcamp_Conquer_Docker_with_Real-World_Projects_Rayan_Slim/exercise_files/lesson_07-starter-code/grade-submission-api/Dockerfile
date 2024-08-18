## Base Image
FROM node:14

## Working Directory
WORKDIR /app

## Install Dependencies
# COPY package.json .
# COPY package-lock.json
COPY package*.json .

RUN npm install

## Copy Source code
COPY . .

## Expose container port
EXPOSE 3000

## Commands to execute application
CMD ["node", "app.js"]

# docker build -t erhanertem/grade-submission-api .
# docker run --name node-server --network myconnection --rm -p 3000:3000 erhanertem/grade-submission-api
# docker push erhanertem/grade-submission-api
# docker push erhanertem/grade-submission-api:1.0.0