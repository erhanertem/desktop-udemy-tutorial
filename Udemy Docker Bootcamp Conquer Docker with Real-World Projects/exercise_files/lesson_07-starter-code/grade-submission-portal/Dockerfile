## Base Image
FROM python:3.8

## Work Directory
WORKDIR /app
## Install requirements
COPY requirements.txt .

RUN pip install -r requirements.txt

## Copy source code
COPY . .

## Expose container port
EXPOSE 5001

## Execute Application
CMD ["python", "app.py"]

# docker network create my-connection
# docker build -t erhanertem/grade-submission-portal .
# docker run --name flask-app --network myconnection --rm -p 5001:5001 -e GRADE_SERVICE_HOST=node-server erhanertem/grade-submission-portal