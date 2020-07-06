//NOTE for TAs, this is our pricing module.
const endpoint = function(request, response){

    const price = 100; //In the future, this will be expanded to return values based on the request
    const sampleData = {
        user: request.body.username,
        price: 100
    };
    response.json(sampleData);

    //need to hit database and update history with this new request
}

module.exports = endpoint;