import express from "express";
import { v4 } from "uuid";
import {
	profComponentModel,
	programComponentModel,
} from "../helpers/mongoose.js";

export const comp = express.Router();

comp.get("/", (req, res) => {
	res.send({ message: "True" });
});

comp.get("/:id", async (req, res) => {
	const id = req.params.id;
	const q = req.query.q;
	let msg = {};

	if (q == "program") {
		msg = await programComponentModel.findOne({
			id,
		});
	} else if (q == "prof") {
		msg = await profComponentModel.findOne({
			id,
		});
	}

	res.send(msg);
});

comp.post("/", async (req, res) => {
	const { body } = req;
	let msg = {};

	if (body.type == "program") {
		body.id = v4();
		msg = await programComponentModel.create(body);
	} else if (body.type === "prof") {
		body.id = v4();
		msg = await profComponentModel.create(body);
	}

	res.send(msg);
});

comp.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { body } = req;
	let msg = {};

	if (body.type == "program") {
		const model = await programComponentModel.findOne({ id });
		Object.assign(model, body);
		msg = await model.save();
	} else if (body.type === "prof") {
		const model = await profComponentModel.findOne({ id });
		Object.assign(model, body);
		msg = await model.save();
	}

	res.send(msg);
});

comp.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const { body } = req;
	let msg = {};

	if (body.type == "program") {
		const model = await programComponentModel.findOne({ id });
		msg = model.deleteOne();
	} else if (body.type == "prof") {
		const model = await profComponentModel.findOne({ id });
		msg = model.deleteOne();
	}

	res.send(msg);
});
