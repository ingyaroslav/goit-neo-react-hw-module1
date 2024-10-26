import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.header}>
                <tr>
                    <th className={css.headerdata}>Type</th>
                    <th className={css.headerdata}>Amount</th>
                    <th className={css.headerdata}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.row} key={id}>
                        <td className={css.rowdata}>{type[0].toUpperCase().concat(type.slice(1))}</td>
                        <td className={css.rowdata}>{amount}</td>
                        <td className={css.rowdata}>{currency}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory