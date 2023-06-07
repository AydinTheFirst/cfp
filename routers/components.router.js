import express from "express";
import { v4 } from "uuid";
import { programComponentModel } from "../helpers/mongoose.js";

export const comp = express.Router();

comp.get("/", (req, res) => {
	res.send({ message: "True" });
});

comp.all("/", async (req, res) => {
	const q = req.query.q;
	const { body, method } = req;
	let msg = {};

	if (body.type == "program") {
		if (method === "POST") {
			body.id = v4();
			msg = await programComponentModel.create(body);
		} else if (method === "PUT") {
			const model = await programComponentModel.findOne({ id: body.id });
			Object.assign(model, body);
			msg = await model.save();
		}
	}

	res.send(msg);
});

comp.all("/:id", async (req, res) => {
	const q = req.query.q;
	const id = req.params.id;
	const { body, method } = req;
	let msg = {};

	if (method === "GET") {
		if (q == "program") {
			msg = await programComponentModel.findOne({
				id,
			});
		}
	}

	res.send(msg);
});
