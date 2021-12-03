import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    " KES " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Transaction = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}{" "}
      <span>
        {sign} {moneyFormatter(transactions.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transactions.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
