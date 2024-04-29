# Use the official Python image as the base image
FROM python:3.8-slim
# Set the working directory inside the container
WORKDIR /app
# Copy the requirements file to the working directory
COPY requirements.txt .
# Install the dependencies
RUN pip install -r requirements.txt
# Copy the rest of the application source code
COPY inventory_api.py .
# Expose the port that the API listens on
EXPOSE 3002
# Run the Flask application when the container starts
CMD ["python", "inventory_api.py"]

# docker build -t product-inventory .
# docker run --rm --name product-inventory --network mynetwork -p 3002:3002 product-inventory 