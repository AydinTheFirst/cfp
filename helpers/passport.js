import passport from "passport";
import { Strategy } from "passport-local";
import { userModel } from "./mongoose.js";

passport.use(
	new Strategy(async (username, password, done) => {
		const user = await userModel.findOne({ username });
		if (!user) return done(null, false, { message: "User is not found!" });

		if (password !== user.password)
			return done(null, false, { message: "Invalid password!" });
		return done(null, user);
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await userModel.findOne({ id: id });
	done(null, user);
});

export const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}

	return res.status(400).redirect(`/login`);
};

export const isAdmin = (req, res, next) => {
	console.log(req.user);
	if (req.method === "GET") {
		next();
	} else if (req.user.type === "admin") {
		next();
	} else {
		return res.sendStatus(401);
	}
};
