## 1. Which base image do you want to use for the app?
FROM python:3.8-slim
## 2. Set the working directory for the docker image.
WORKDIR /app
## 3. Copy your source code file to the working directory.
# COPY python-app.py /app/
# ./ is same as /app/
# COPY python-app.py ./
# COPY python-app.py .
# COPY EVERYTHING INSIDE THE CWD TO WORDIR
COPY . . 

## 4. Define the command to run when the container starts.
# CMD ["python", "/app/python-app.py"]
# Its possible to omit the cwd prefix @ the app file as its provided by workdir command.
CMD ["python", "python-app.py"]