const endpoint = function(request, response){
    // username can be accessed under request.username
    console.log(request.username)
}

module.exports = endpoint;