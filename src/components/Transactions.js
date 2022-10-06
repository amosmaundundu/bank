import React, { useEffect, useState } from "react"
import TransactionItem from "./TransactionItem"

function Transactions({date, description, category, amount}) {
    return (
        <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    );
  }
export default Transactions;