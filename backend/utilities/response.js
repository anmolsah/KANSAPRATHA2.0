module.exports.responseReturn = (res, code, data) => {
    return res.status(code).json({
        status: code >= 400 ? "error" : "success",
        code: code,
        data: data,
    });
};
