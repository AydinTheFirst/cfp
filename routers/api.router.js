import express from "express";
import { users } from "./users.router.js";
import { comp } from "./components.router.js";
import { isAdmin } from "../helpers/passport.js";

export const api = express.Router();

api.use("/users", users);
api.use("/components", isAdmin, comp);

api.get("/", (req, res) => {
	res.send({ message: "True" });
});

api.post("/test", (req, res) => {
	console.log(req.body);
	console.log(req.files);
	res.redirect("/");
});

