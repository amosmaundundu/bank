import React from 'react';
import Transactions from "./Transactions";

function TransactionItem({transactions}) {
    const list = transactions.map((item)=>{
      return <Transactions key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
    })
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {/* render a list of <Transaction> components here */}
          {list}
        </tbody>
      </table>
    );
  }
export default TransactionItem

