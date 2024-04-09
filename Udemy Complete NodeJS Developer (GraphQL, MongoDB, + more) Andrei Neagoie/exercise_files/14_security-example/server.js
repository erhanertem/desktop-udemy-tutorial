const fs = require("fs");
const path = require("path");
const https = require("https");

const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

require("dotenv").config();

const PORT = 3000;

// > Passport Strategy Setup
const config = {
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
};
const AUTH_OPTIONS = {
	callbackURL: "/auth/google/callback",
	clientID: config.CLIENT_ID,
	clientSecret: config.CLIENT_SECRET,
};
function verifyCallback(accessToken, refreshToken, profile, done) {
	console.log("Google profile", profile);
	// done(err, user);
	done(null, profile); // null-> error object , profile-> verified object
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();

// > SECURITY MIDDLEWARES @ THE VERY TOP
// NOTE: HELP PROTECT ALL END POINTS THAT COMES AFTER IT
app.use(helmet()); //SETUPS HELMET W/DEFAULT CONFIGURATION
app.use(passport.initialize()); //SETUPS PASSPORT SESSION

// MIDDLEWARE FUNCTION
function checkLoggedIn(req, res, next) {
	const isLoggedIn = true; //TODO
	if (!isLoggedIn) {
		return res.status(401).json({ error: "You must login!" });
	}
	next();
}

// > OAUTH AUHENTICATION
// #1. USER LOGIN ENDPOINT - AUTHORIZATION CODE REQUEST TO AUTH GOOGLE
// app.get("/auth/google", (req, res) => {});
app.get("/auth/google", passport.authenticate("google", { scope: ["email"] }));
// #2. THIS IS THE ENDPOINT GOOGLE SENDS THE AUTHORIZATION CODE RESPONSE TO THE APP
// app.get("/auth/google/callback", (req, res) => {});
app.get(
	"/auth/google/callback", // end-point
	// passport middleware
	passport.authenticate(
		"google",
		{
			failureRedirect: "/failure", // kick in to failure page
			successRedirect: "/", //kick in to project homepage
			session: false,
		} // options in success/failure
	),
	(req, res) => {
		console.log("Google called us back!");
	}
);
// #3. USER LOGOUT GENERIC ENDPOINT - USER DES NOT NEED TO PROVIDE ANY DATA
app.get("/auth/logout", (req, res) => {});

// IN EXPRESS EACH ENDPOINT CAN GET A MIDDLEWARE/MIDDLEWARES AFTER THE ROUTE DEFINITION
app.get("/secret", checkLoggedIn, (req, res) => {
	return res.send("Your personal value is 42!");
});

app.get("/failure", (req, res) => {
	return res.send("Failed to log in");
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
	.createServer(
		{
			key: fs.readFileSync("key.pem"),
			cert: fs.readFileSync("cert.pem"),
		}, // server options object
		app //req listener
	)
	.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});
