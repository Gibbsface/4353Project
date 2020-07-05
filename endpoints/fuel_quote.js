const endpoint = function(request, response){
const sampleData = {
    user: request.body.username,
    price: 100
};
response.json(sampleData);
}

module.exports = endpoint;