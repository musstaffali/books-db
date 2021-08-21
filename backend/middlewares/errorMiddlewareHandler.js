
const errorMiddlewareHandler = (err, req, res, next) => {
    //set status code
    const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode(errorStatusCode);
    res.json({
        messsage: err.messsage,
    });
}

module.exports = { eerrorMiddlewareHandlerrro }
