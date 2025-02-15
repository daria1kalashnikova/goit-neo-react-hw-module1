import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={style.table}>
            <thead className={style["table-head"]}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((transactions) => {
                    return (
                        <tr key={transactions.id} className={style["table-row"]}>
                            <td>{transactions.type}</td>
                            <td>{transactions.amount}</td>
                            <td>{transactions.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory