const { Schema, model } = require("mongoose");
const Joi = require("joi");


const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		math: emailRegexp,
		unique:  true,
		required: [true, 'Email is required'],
	},
	password: {
		  type: String,
		  minlength: 6,
		  required: [true, 'Password is required'],
	},
	subscription: {
		  type: String,
		  enum: ["starter", "pro", "business"],
		  default: "starter"
	},
	token: {
		  type: String,
		  default: "",
	},
	avatarURL: {
		type: String,
		required: true,
	},
	verify: {
		type: Boolean,
		default: false,
	  },
	  verificationToken: {
		type: String,
		required: [true, 'Verify token is required'],
		default: ""
	  }
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
});

const schemas = {
	registerSchema,
	loginSchema,
	emailSchema,
};

const User = model("user", userSchema);

module.exports = {
	User,
	schemas,
}


  
  