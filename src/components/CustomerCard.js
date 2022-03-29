import { useState, useEffect } from "react"
export default function CustomerCard({ transactions }) {
    const [totals, setTotals] = useState({ points: 0, amtSpent: 0, month: 1 });
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthNum = null;
    const calcPoints = (price) => {

        if (price >= 50 && price < 100) {
            //plus 1 point for every dollar spent over $50 in each transaction
            return price - 50;
        } else if (price > 100) {
            //2 points for every dollar spent over $100 in each transaction
            return (2 * (price - 100) + 50);
        }
        return 0;
    }

    useEffect(() => {
        let totalAmount = 0, Rpoints = 0;
        const sumTotal = transactions.map(ele => {
            totalAmount = ele.purchase + totalAmount;
            monthNum = new Date(ele.date).getMonth();
            console.log("totalAmount", totalAmount, "per month", monthNum);
        });

        Rpoints = calcPoints(totalAmount);

        setTotals({ points: Rpoints, amtSpent: totalAmount, month: monthNames[monthNum] });
        console.log(totals);

    }, [transactions])
    return (
        <>
            <h5>{totals.month} Data</h5>
            <ol>
                <li>Money Spent ${totals.amtSpent} for the month.</li>
                <li>Reward Point(s) Earned: {totals.points}</li>
            </ol>
        </>
    )
}