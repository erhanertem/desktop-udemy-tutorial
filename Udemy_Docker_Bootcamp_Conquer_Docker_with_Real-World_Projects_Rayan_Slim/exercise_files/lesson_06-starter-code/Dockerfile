# # -> OPTION #1 - Install dependencies when running the container app
# ## 1. Which base image do you want to use?
# FROM maven:3.8-openjdk-17-slim
# ## 2. Set the working directory.
# WORKDIR /app/
# ## 3. Copy the application's project files into the working directory.
# COPY /springboot-demo .
# ## 4. Document and inform the developer that the application will use the container port: 8080.
# EXPOSE 8080
# ## 5. Define the command to run when the container starts.
# CMD ["mvn", "clean", "spring-boot:run"]
# # docker build -t springboot-demo .
# # docker run -p 8080:8080 --rm --name springboot-demo-container springboot-demo

# # -> OPTION #2 - Make dependencies readily available to the container app
# ## 1. Which base image do you want to use?
# FROM maven:3.8-openjdk-17-slim
# ## 2. Set the working directory.
# WORKDIR /app/
# ## 3. Copy the application's project files into the working directory.
# COPY /springboot-demo .
# ## 4. Install the dependencies listed inside of pom.xml
# RUN mvn install
# ## 5. Document and inform the developer that the application will use the container port: 8080.
# EXPOSE 8080
# ## 6. Define the command to run when the container starts.
# CMD ["mvn", "spring-boot:run"]
# # docker build -t springboot-demo .
# # docker run -p 8080:8080 --rm --name springboot-demo-container springboot-demo

# -> OPTION #3 - JAR type execution @ the container app
## 1. Which base image do you want to use?
FROM maven:3.8-openjdk-17-slim
## 2. Set the working directory.
WORKDIR /app/
## 3. Copy the application's project files into the working directory.
COPY /springboot-demo .
## 4. Install the dependencies listed inside of pom.xml
RUN mvn package
## 5. Document and inform the developer that the application will use the container port: 8080.
EXPOSE 8080
## 6. Define the command to run when the container starts.
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
# docker build -t springboot-demo .
# docker run -p 8080:8080 --rm --name springboot-demo-container springboot-demo