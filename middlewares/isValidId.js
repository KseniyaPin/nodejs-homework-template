const { required } = require('joi');
const { isValidObjectId } = require('mongoose');

const { HttpError } = required('../helpers');

const isValidId = (req, res, next) => {
	const { id } = req.params;
	if (isValidObjectId(id)) {
		next(HttpError(400, `${id} is not valid id`))
	}
	next();
}

module.exports = isValidId;