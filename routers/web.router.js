import express from "express";
import {
	profComponentModel,
	programComponentModel,
} from "../helpers/mongoose.js";
import { slideData, slideVidData } from "../structures/index.js";

export const web = express.Router();
web.get("/", async (req, res) => {
	const programs = await programComponentModel.find();
	const profs = await profComponentModel.find();
	res.render("index", {
		title: "Home",
		slideData,
		slideVidData,
		programs,
		profs,
	});
});

web.get("/login", (req, res) => {
	if (req.isAuthenticated()) res.redirect("/admin");
	res.render("login", {
		title: "Login",
	});
});

web.get("/admin", async (req, res) => {
	if (req.user?.type !== "admin") return res.redirect("/login");
	const programs = await programComponentModel.find();
	const profs = await profComponentModel.find();
	res.render("admin", {
		title: "Admin",
		programs,
		profs,
	});
});
