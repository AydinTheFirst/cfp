import express from "express";
import passport from "passport";

export const users = express.Router();

users.get("/", (req, res) => {
	res.send({ message: "True" });
});

users.post("/auth", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return next(err);
		}

		if (!user) {
			return res.status(401).json({ message: info.message });
		}

		req.logIn(user, (err) => {
			if (err) {
				return next(err);
			}

			const redirectUri =
				req.query.redirectUri || user.isAdmin ? "/admin" : "/dashboard";

			return res.status(200).json({ redirectUri, user });
		});
	})(req, res, next);
});
