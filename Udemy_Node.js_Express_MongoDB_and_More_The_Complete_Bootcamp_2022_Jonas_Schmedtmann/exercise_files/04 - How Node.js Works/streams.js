const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
	// //Solution 1
	// fs.readFile("test-file.txt", (err, data) => {
	// 	if (err) console.log(err); //handle err in case the file does not exist
	// 	res.end(data); //respond with the read data to the response
	// });
	// //Solution 2: Streams
	// const readable = fs.createReadStream("test-files.txt");
	// //->on data event
	// readable.on("data", (chunk) => {
	// 	res.write(chunk);
	// });
	// //->on end event
	// readable.on("end", () => {
	// 	res.end();
	// });
	// //->on error event
	// readable.on("error", (err) => {
	// 	console.log(err);
	// 	res.statusCode = 500;
	// 	res.end("File not found");
	// });
	//Solution 3:
	const readable = fs.createReadStream("test-file.txts");
	//->on data/end event
	readable.pipe(res); //Readable source is piped to a writable destination (our response)
	//->on error event
	readable.on("error", (err) => {
		console.log(err);
		res.statusCode = 500;
		res.end("File not found");
	});
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Server Listening...");
});
