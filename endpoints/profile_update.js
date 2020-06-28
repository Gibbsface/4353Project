const endpoint = function(request, response){
    // need to validate input data
    console.log(request.username);
    console.log(request.body);
}

module.exports = endpoint;