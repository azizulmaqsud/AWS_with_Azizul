exports.lambdaHandler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi, calling from Lambda!'),
    };
    return response;
};