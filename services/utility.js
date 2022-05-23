module.exports.sendResponse = (
	res,
	statusCode,
	param,
	message = "Something went wrong",
	data = {}
) => {
	if (typeof param === "object") {
		return res.status(statusCode).json(param);
	} else if (typeof param == "string") {
		const resp = {
			code: param,
			message: message,
			data: data,
		};
		return res.status(statusCode).json(resp);
	} else {
		const resp = {
			code: "INTERNAL_ERROR",
			message: "Something went wrong",
			data: {},
		};
		return res.status(statusCode).json(resp);
	}
};

module.exports.only = function(obj, keys){
	obj = obj || {};
	if ('string' == typeof keys) keys = keys.split(/ +/);
	return keys.reduce(function(ret, key){
		if (null == obj[key]) return ret;
		ret[key] = obj[key];
		return ret;
	}, {});
};
