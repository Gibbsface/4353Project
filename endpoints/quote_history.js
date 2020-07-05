const endpoint = function (request, response) {
  const history = [
    {
      username: "test",
      id: 1,
      gallonsRequested: "5",
      deliveryAddress: "0005 Example Dr",
      deliveryDate: "6/28/2020",
      suggestedPrice: "$1",
      totalPrice: "$5",
    },
    {
      username: "nontest",
      id: 2,
      gallonsRequested: "10",
      deliveryAddress: "0010 Example St",
      deliveryDate: "6/30/2020",
      suggestedPrice: "$2",
      totalPrice: "$20",
    },
    {
      username: "test",
      id: 3,
      gallonsRequested: "15",
      deliveryAddress: "0015 Example Pl",
      deliveryDate: "7/1/2020",
      suggestedPrice: "$3",
      totalPrice: "$45",
    },
    {
      username: "test",
      id: 4,
      gallonsRequested: "200",
      deliveryAddress: "0200 Example Rd",
      deliveryDate: "7/3/2020",
      suggestedPrice: "$4",
      totalPrice: "$800",
    },
    {
      username: "test",
      id: 5,
      gallonsRequested: "1000",
      deliveryAddress: "1000 Example St",
      deliveryDate: "7/5/2020",
      suggestedPrice: "$5",
      totalPrice: "$5000",
    },
  ];
  response.contentType("application/json");
  response.json(history);
};

module.exports = endpoint;
