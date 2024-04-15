const fs = require("fs");
const path = require("path");
const https = require("https");

const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const cookieSession = require("cookie-session");

require("dotenv").config();

const PORT = 3000;

// > Passport Strategy Configuration
const config = {
	CLIENT_ID: process.env.CLIENT_ID, //PROVIDED BY GOOGLE ONE PER PROJECT - WE HAVE TO KEEP IOT SECRET ON SERVER SIDE
	CLIENT_SECRET: process.env.CLIENT_SECRET, // PROVIDED BY GOOGLE ONE PER PROJECT - WE HAVE TO KEEP IT SECRET ON SERVER SIDE
	COOKIE_KEY_1: process.env.COOKIE_KEY_1,
	COOKIE_KEY_2: process.env.COOKIE_KEY_2,
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

// > Configure passport to use a login strategy
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
// > Save the session to the cookie - WHEN COOKIE (USER ARG) IS SET TO SEND TO USER
passport.serializeUser((user, done) => {
	// done(null, user);
	// NOTE: SERIALIZER IS USED TO MINIMIZE THE SESSION COOKIE BY DWINDLING THE PROFILE INFORMATION RETURNED FROM THE VERIFYCALLBACK FUNCTION.
	done(null, user.id);
});
// > Read the session from the cookie (OBJ ARG) - WHEN COOKIE IS RECEIVED FROM THE USER
// passport.deserializeUser((obj, done) => {
// 	done(null, obj);
// });
passport.deserializeUser((id, done) => {
	// User.findById(id).then((user) => {
	// 	done(null, user);
	// });
	done(null, id);
});

const app = express();

// > SECURITY MIDDLEWARES @ THE VERY TOP
// NOTE: HELP PROTECT ALL END POINTS THAT COMES AFTER IT
// #1.HELP PROTECT ALL ENDPOINTS FOR COMMON MISCONFIGURATION ISSUES
app.use(helmet());
// #2.CREATE A CLIENT-SIDE COOKIE SESSION MIDDLEWARE
app.use(
	cookieSession({
		name: "session", // session name
		maxAge: 60 * 60 * 1000 * 24, // 1 day till the session expires
		keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2], // NOTE: Array structure is required here so that we can rotate a new secret key while the older one is still supported. After certain time, we can get rid of the old secret key to finalize the key rotation process. THE PRIMARY KEY IS THE ACTIVE USED ONE.SO ANY REPLACER KEY BECOMES THE FIRST ELEMENT IN THE ARRAY.
	})
); // NOTE: SESSION NEEDS TO BE SETUP BEFORE PASSPORT USES IT AND AFTER HELMET TO HAVE IT CHECK OUR HEADERS
// #3.HELP AUTHENTICATE USERS VIA PASSPORT
// #3.1 SETUPS PASSPORT SESSION
app.use(passport.initialize());
// #3.2 POPULATES PASSPORT SESSION - AUTHENTICATES THE SESSION COOKIE SENT TO OUR SERVER BASED ON KEYS PROVIDED BY THE COOKIE SESSION MIDDLEWARE - CALLS passport.deserializeUser() MIDDLEWARE INSIDE OUR EXPRESS NODEJS APP WHICH SETS THE REQ.USER THAT IS TAKEN AS AN ARGUMENT BY checkLoggedIn function WHICH IS RESPONSIBLE FOR CHECKING LOGEDIN STATE.
app.use(passport.session());

// MIDDLEWARE FUNCTION
function checkLoggedIn(req, res, next) {
	//req.user SET BY passport.session() MIDDLEWARE
	console.log(`👉 Current user is : ${req.user}`);
	const isLoggedIn =
		req.isAuthenticated() && // Built-in passport.js function to check specifically found in the session against what we have received req.user(could be anything - can't just depend on it)
		req.user;
	if (!isLoggedIn) {
		return res.status(401).json({ error: "You must login!" });
	}
	next();
}

// > OAUTH AUHENTICATION
// -> #1. USER LOGIN ENDPOINT - AUTHORIZATION CODE REQUEST TO AUTH GOOGLE (FROM USER TO GOOGLE LOGIN)
// app.get("/auth/google", (req, res) => {});
app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["email"] })
	// NOTE: Passports specifies which data he needs from a return res.
	// passport.authenticate("google", { scope: ["email", "profile"] })
);
// -> #2...GOOGLE SENDS BACK TO THE USER AUTH PROMPT AND HAVE YOU ENTER YOUR CREDENTIALS ON GOOGLE SERVER ...
// -> #3. THIS IS THE ENDPOINT GOOGLE SENDS THE AUTHORIZATION CODE RESPONSE TO THE APP
// app.get("/auth/google/callback", (req, res) => {});
app.get(
	// authorised redirect URI end-point we specified while creating OAuth client ID process @ google.com API and services page
	"/auth/google/callback",
	// > + passport middleware
	passport.authenticate(
		"google",
		{
			failureRedirect: "/failure", // kick in to failure page in case of login failure
			successRedirect: "/", //kick in to project homepage in case of login success(
			session: true, // omittable - set true by default / utilizes passport.serializeUser()
		} // options in success/failure
	),
	// > + REQ HANDLER
	(req, res) => {
		console.log("Google called us back!");
	}
);
// -> #4. USER LOGOUT GENERIC ENDPOINT - USER DOES NOT NEED TO PROVIDE ANY DATA
app.get("/auth/logout", (req, res) => {
	// #1.PASSPORT.JS EXPOSES A LOGOUT FUNCTION.
	req.logout(); //Removes req.user and terminates any logged in session

	// #2.REDIRECT TO A PAGE OF UNPROTECTED ENDPOINT
	return res.redirect("/"); //EXPRESS.JS RES METHOD
});

// IN EXPRESS EACH ENDPOINT CAN GET A MIDDLEWARE/MIDDLEWARES AFTER THE ROUTE DEFINITION
app.get("/secret", checkLoggedIn, (req, res) => {
	return res.send("Your personal value is 42!");
});

// > STEP #3.1 --- LOGIN FAILURE PAGE
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
