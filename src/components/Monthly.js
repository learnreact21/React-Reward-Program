import { useState, useEffect } from "react"

export default function MonthlyStatement({ filteredData }) {
    // console.log("Monthly", filteredData.length);
    const [totals, setTotals] = useState({ points: 0, amtSpent: 0, month: 1 });
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthNum = null;
    const monthlyRecords = () =>{ 
            filteredData.map((item, index) => {
                console.log(item); 
            })
    }
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

    useEffect( ()=>{
        console.log("calling monthly data "); 
        monthlyRecords();
    }, [filteredData]); 
    return (
        <>
       {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                    return <div key={index}>
                        <h5 className="text-danger">Transaction Date: {item.date}</h5>
                        <p>Money Spent ${item.purchase} for the month.</p>
                        <p>Reward Point(s) Earned: </p>
                    </div>
                })
                
            ): (
                 <h5>No Purchase Made.</h5>
                )
        }
        </>
    )
}
