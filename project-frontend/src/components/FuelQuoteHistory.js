import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/quote_history", {
      method: "get",
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((history) =>
        this.setState({ history }, () =>
          console.log("History fetched...", history)
        )
      );
  }

  render() {
    return (
      <div className="container">
        <div
          class="is-overlay has-text-centered single-spaced"
          style={{ top: 150 }}
        >
          <div class="container">
            <div class="box">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Gallons Requested</th>
                    <th>Delivery Address</th>
                    <th>Delivery Date</th>
                    <th>Suggested Price/Gallon</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                {this.state.history.map((history) => (
                  <tr key={history.id}>
                    <th>{history.gallonsRequested}</th>
                    <th>{history.deliveryAddress}</th>
                    <th>{history.deliveryDate} </th>
                    <th>{history.suggestedPrice}</th>
                    <th>{history.totalPrice}</th>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
