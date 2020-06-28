import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class History extends React.Component {

  constructor(props){
    super(props)
    this.state = {entries: []}
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/history",{
      method:'get',
      credentials:'include',
      mode:'cors'
    }).then(res=>{
      res.json().then(result=>{
        if(result.success){
          this.setState({entries:result.data})
        }
      })
    })
  }

  render() {
    let history;
    if(this.state.entries.length==0){
      history = null
    }else{
      history = this.state.entries.map(entry=>{
        return (<tbody>
          <th>{entry.gallons}</th>
          <th>{entry.address}</th>
          <th>{entry.date}</th>
          <th>{entry.suggestedPrice}</th>
          <th>{entry.totalPrice}</th>
        </tbody>)
      })
    }
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
                      <th>Suggested Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  {history}
                </table>
                {history==null?<p>No entries</p>:""}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default History;
