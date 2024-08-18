# Use the official Maven runtime with JDK 17 as a base image
FROM maven:3.6.3-openjdk-17-slim
# Set the working directory inside the container
WORKDIR /app
# Copy the project files
COPY . .

RUN mvn install
# Expose the port that the application listens on
EXPOSE 9090
## 5. Define the command to run when the container starts.
CMD ["mvn","spring-boot:run"]

# docker build -t order-management .
# docker run --rm --name order-management --network mynetwork -p 9090:9090 -e PRODUCT_INVENTORY_API_HOST=http://product-inventory -e PRODUCT_CATALOG_API_HOST=http://product-catalog -e SHIPPING_HANDLING_API_HOST=http://shipping-and-handling order-management 