import { useState, useEffect } from "react"
export default function TotalCard({ transactions }) {
    const [totals, setTotals] = useState({ points: 0, amtSpent: 0 });

    const calcPoints = (price) => {

        if (price >=50 && price < 100) {
        //plus 1 point for every dollar spent over $50 in each transaction
            return price-50;
        } else if (price >100){
            //2 points for every dollar spent over $100 in each transaction
            return (2*(price-100) + 50);
        }
        return 0;
    }

    useEffect(() => {
        let totalAmount =0 , Rpoints =0; 
        const sumTotal= transactions.map(ele =>{
             totalAmount = ele.purchase + totalAmount; 
            console.log(totalAmount);
        });

          console.log(sumTotal);
          Rpoints = calcPoints(totalAmount)
        console.log("points", Rpoints);
          
        setTotals({points: Rpoints, amtSpent: totalAmount})
    }, [transactions])
    return (
        <>

            <ol>
                <li>Money Spent: {totals.amtSpent}</li>
                <li>Reward Point(s) Earned: {totals.points}</li>

            </ol>
        </>
    )
}