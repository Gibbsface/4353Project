const endpoint = function(request, response){
    if(validate(request.body))
    {
        response.send("Profile Update Success")
    } else {
        response.send("Profile Update Failed")
    }
}

validate = (profile) => {
    //hit database and try to post new data, if we get an error we will return false
    console.log("PROFILE...", profile)
    return true
}

module.exports = endpoint;