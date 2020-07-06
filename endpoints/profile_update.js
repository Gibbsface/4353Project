const endpoint = function(request, response){
    if(validate(request.body))
        response.send("Profile Update Success")
}

validate = (profile) => {
    //hit database and try to post new data, if we get an error we will return false
    return true
}

module.exports = endpoint;