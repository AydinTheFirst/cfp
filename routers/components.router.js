import express from "express";
import { users } from "./users.router.js";

export const api = express.Router();
api.use("/users", users);
api.get("/", (req, res) => {
	res.send({ message: "True" });
});

api.post("/test", (req,res) => {
    console.log(req.body);
    console.log(req.files)
    res.redirect("/")
})