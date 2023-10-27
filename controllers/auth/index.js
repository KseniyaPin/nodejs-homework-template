const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");

const {  ctrlWrapper } = require("../../helpers");

const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/user");
const avatarsDir = path.join(__dirname, "../", "public", "avatars");
const updateAvatar = async (req, res) => {
const avatarsDir = path.join(__dirname, "../", "public", "avatars");
	const { _id } = req.user;
	const { path: tempUpload, originalname } = req.file;
	const resultUpload = path.join(avatarsDir, originalname);
	await fs.rename(tempUpload, resultUpload);
	const avatarURL = path.join("avatars", originalname);
	await User.findByIdAndUpdate(_id, {avatarURL});

	res.json({
		avatarURL,
	})
}

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	getCurrent: ctrlWrapper(getCurrent),
	logout: ctrlWrapper(logout),
	updateAvatar: ctrlWrapper(updateAvatar),
}