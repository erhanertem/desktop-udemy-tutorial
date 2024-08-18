## 1. Which base image do you want to use?
FROM openjdk:11-jre-slim
## 2. Set the working directory.
WORKDIR /app/
## 3. Copy your source code file to the working directory.
COPY . .
## 4. Define the command to run when the container starts.
CMD [ "java", "-cp", "JavaApp.jar", "JavaApp" ]