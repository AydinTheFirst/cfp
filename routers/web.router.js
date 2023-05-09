import express from "express";
import { detailsData, slideData } from "../structures/home";

export const web = express.Router();

web.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
		slideData,
		detailsData,
	});
});
