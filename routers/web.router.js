import express from "express";

export const web = express.Router();

const slideData = [
	"imgs/logo.png",
	"https://cdn.discordapp.com/attachments/1102803386283343892/1104837949805297724/web_cover.jpg",
	"https://static.wixstatic.com/media/ead5dc_64e59797437941ea990a7533c8de992d~mv2.jpg/v1/fill/w_279,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/unnamed-3.jpg",
];
web.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
		slideData,
	});
});
