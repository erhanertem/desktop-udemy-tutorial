## 1. Which base image do you want to use?
FROM python:3.8-slim

## 2. Set the working directory
WORKDIR /app/

## 3. Copy the project files into the working directory.
# This includes the flask-demo folder
# COPY . .
# Exclusive of flask-demo folder but everything inside it
# COPY flask-demo/ .
## 3. Copy the project requirements.txt file into the working directory.
COPY flask-demo/requirements.txt .

## 4. Install the dependencies
# RUN pip install -r flask-demo/requirements.txt
RUN pip install -r requirements.txt

## 5. Copy the remainign prject files into the working directory
COPY flask-demo/ .

## 6. Document and inform the developer that the application will use PORT 5000 of the container.
EXPOSE 5000

# ## 7. Set env shell variable per Option #2 
# ENV FLASK_APP=app.py

# ## 8. Define the command to run when the container starts
# CMD ["flask", "run", "--host=0.0.0.0"]

## 7. Define the command to run when the container starts per Option #1.
# CMD ["python", "flask-demo/app.py"]
CMD ["python", "app.py"]

# docker build -t flask-demo .
# docker run -p 8080:5000 --rm --name flask-demo-container flask-demo