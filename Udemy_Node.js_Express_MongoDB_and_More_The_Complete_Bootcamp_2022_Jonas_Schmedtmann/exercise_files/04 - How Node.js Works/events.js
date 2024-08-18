//LESSON 35 Events in Practice

//-->NAMED LISTENER
const http = require("http"); //Import http module
//--->#1 import events module
const EventEmitter = require("events"); //Import events module

//--->#2 In real life we make a copy of the event emitter from which we can create customized copies
class Sales extends EventEmitter {
	constructor() {
		super(); //EventEmitter is the super-class
	}
}

//--->#3 event constructors creates an emitter called myEmitter
const myEmitter = new Sales();

//--->#4 Event Listeners - THE LISTENER HAS TO BE DECLARED BEFORE AN EVENT EMITTER
//NOTE: Same listeners runs sync in a blocking manner
myEmitter.on("newSale", () => {
	console.log("There is a new sale!");
}); //"newSale" listener when called execute this call-back function

myEmitter.on("newSale", () => {
	console.log("Costumer name: Erhan ERTEM");
}); //"newSale" listener when called execute this call-back function

myEmitter.on("newSale", (stock) => {
	console.log(`There are now ${stock} items left in stock`);
});

//--->#5 Event Emitter
myEmitter.emit("newSale", 9); // Emit "newSale" for the listeners to release their call-back functions

///////////////////////////////////////
//--> STANDARD SERVER LISTENER

//--->#1 CREATE HTTP SERVER
const server = http.createServer();

//--->#2 STANDARD SERVER EVENT LISTENERS
server.on("request", (req, res) => {
	console.log("Request received");
	console.log(req.url);
	res.end("Request received");
});

server.on("request", (req, res) => {
	console.log("Another request✨");
});

server.on("close", () => {
	console.log("Server closed");
});

//--->#3 START HTTP SERVER LISTENING
server.listen(8000, "127.0.0.1", () => {
	console.log("Waiting for requests...");
});
