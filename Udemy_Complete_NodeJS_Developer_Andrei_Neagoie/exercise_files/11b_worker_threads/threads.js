const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
  console.log(`Main Thread! Process ID: ${process.pid}`);
  // CREATE WORKER THREADS FROM THE MAIN THREAD
  new Worker(__filename, { workerData: [7, 6, 2, 3] });
  new Worker(__filename, { workerData: [1, 3, 4, 3] });
} else {
  console.log(`Worker! Process ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
