# Use the official Node.js image as the base image
FROM node:14
# Set the working directory inside the container
WORKDIR /app
# Copy the server code to the working directory
COPY server /app/server
# Change to the server directory
WORKDIR /app/server
# Install the server dependencies
RUN npm install
# Change back to the app directory
WORKDIR /app
# Copy the client code to the client directory
COPY client /app/client
# Change to the client directory
WORKDIR /app/client
# Install the client dependencies
RUN npm install
# Build the React application
RUN npm run build
# Change back to the app directory
WORKDIR /app/server
# Expose the port that the server listens on
EXPOSE 4000
# Run the Node.js server when the container starts
CMD ["node" , "server.js"]

# docker network create mynetwork
# docker build -t ecommerce-ui .
# docker run --rm --name ecommerce-ui --network mynetwork -p 4000:4000 -e REACT_APP_PROFILE_API_HOST=http://profile-management -e REACT_APP_SHIPPING_API_HOST=http://shipping-and-handling -e REACT_APP_CONTACT_API_HOST=http://contact-support-team -e REACT_APP_INVENTORY_API_HOST=http://product-inventory -e REACT_APP_PRODUCT_API_HOST=http://product-catalog -e REACT_APP_ORDER_API_HOST=http://order-management ecommerce-ui