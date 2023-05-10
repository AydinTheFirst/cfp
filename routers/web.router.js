import express from "express";
import { programsData, slideData, textImgData } from "../structures/index.js";

export const web = express.Router();

web.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
		slideData,
		programsData,
		textImgData,
	});
});

web.get("/login", (req, res) => {
	res.render("login", {
		title: "Login",
	});
});

