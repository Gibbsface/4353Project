const endpoint = function (request, response) {
  const history = [
    {
      username: "test",
      id: 1,
      gallonsRequested: "5",
      deliveryAddress: "0005 Example Dr",
      deliveryDate: "6/28/2020",
      suggestedPrice: "1",
      totalPrice: "5",
    },
    {
      username: "test",
      id: 2,
      gallonsRequested: "10",
      deliveryAddress: "0010 Example St",
      deliveryDate: "6/30/2020",
      suggestedPrice: "2",
      totalPrice: "20",
    },
  ];
  response.contentType("application/json");
  response.send(history);
};

module.exports = endpoint;
