const cluster = require('cluster'); //CALL THE CLUSTER NODEJS MODULE
// VERY IMPORTANT!!! FOR WINDOWS OS - WINDOWS MAY OPT NOT TO USE ROUND-ROBIN SCHEDULAR - IN ORDER TO ENFORCE IT WE HAVE TO SET IT EXPLICITLY THE SCHEDULING POLICY TO BE ROUND-ROBIN
// SECOND approach would be setting windows env variable as NODE_CLUSTER_SCHED_POLICY='rr' to enable round-robin
cluster.schedulingPolicy = cluster.SCHED_RR;
const os = require('os');

const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running server.js');

if (cluster.isMaster) {
  console.log('Master has been started...');
  // CREATE WORKER CLUSTERS BASED ON AVAILABLE CPU CORES
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    // CREATE TWO WORKER CLUSTERS FROM THE MASTER CLUSTER
    cluster.fork();
  }
} else {
  console.log('Worker process started.');
  //EACH WORKER CLUSTER LISTENS AS A SERVER ON PORT 3000 AND SHARES THE REQUESTS
  app.listen(3000);
}
