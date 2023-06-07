import express from "express";
import { programComponentModel } from "../helpers/mongoose.js";
import { cardData, slideData } from "../structures/index.js";

export const web = express.Router();
web.get("/", async (req, res) => {
	const programsData = await programComponentModel.find();
	res.render("index", {
		title: "Home",
		slideData,
		programsData,
		cardData
	});
});

web.get("/login", (req, res) => {
	if (req.isAuthenticated()) res.redirect("/admin");
	res.render("login", {
		title: "Login",
	});
});

web.get("/admin", async (req, res) => {
	const programs = await programComponentModel.find();
	res.render("admin", {
		title: "Admin",
		programs,
	});
});
