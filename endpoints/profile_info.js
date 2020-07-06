const endpoint = function(request, response){
    // username can be accessed under request.username
    const profile = {
        fullName:"Johnny Appleseed",
        addr1:"123 Apple Way",
        addr2:"Apt A",
        city:"Blossom",
        state:"Virginia",
        zip:"12345"
    };
    response.contentType("application/json");
    response.json(profile);
}

module.exports = endpoint;