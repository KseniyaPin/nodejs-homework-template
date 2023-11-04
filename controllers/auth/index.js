const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

const {  ctrlWrapper } = require("../../helpers");



module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	getCurrent: ctrlWrapper(getCurrent),
	logout: ctrlWrapper(logout),
	updateAvatar: ctrlWrapper(updateAvatar),
	verifyEmail: ctrlWrapper(verifyEmail),
	resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
}