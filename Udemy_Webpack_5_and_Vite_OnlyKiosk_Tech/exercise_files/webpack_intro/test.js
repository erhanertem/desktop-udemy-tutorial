console.log(__dirname); //This is a global NODEJS variable often used in webpack config file - always points to the location of file being called (absolute path of the current file)
console.log(process.cwd()); //cwd stands for current working directory for NODEJS process - always points to the location from which process is called (absolute path of the executed node command)
