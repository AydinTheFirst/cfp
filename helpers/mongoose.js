import mongoose, { Schema } from "mongoose";

mongoose.set("strictQuery", true);
await mongoose
	.connect(process.env.mongodb)
	.then(() => console.log("Mongoose connection is successfull!"))
	.catch((err) => {
		throw new Error(err);
	});

// User Model
export const userModel = mongoose.model(
	"user",
	new Schema({
		id: { type: String, required: true, unique: true },
		email: { type: String, unique: true },
		username: { type: String, unique: true },
		password: { type: String, required: true },
		type: { type: String, default: "user" },
	})
);

// User Model
export const programComponentModel = mongoose.model(
	"program-component",
	new Schema({
		id: { type: String, required: true, unique: true },
		title: { type: String, unique: true },
		icons: { type: Array, default: [] },
		description: { type: String, default: "" },
		checkList: { type: Array, default: [] },
		numList: { type: Array, default: [] },
		buttonLabel: { type: String, default: "" },
		buttonHref: { type: String, default: "" },
	})
);

// User Model
export const profComponentModel = mongoose.model(
	"prof-component",
	new Schema({
		id: { type: String, required: true, unique: true },
		title: { type: String, unique: true },
		description: { type: String, default: "" },
		image: { type: String, default: ""},
	})
);

