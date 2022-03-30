import { useState, useEffect } from "react"
import MonthlyStatement from "./Monthly";

export default function CustomerCard({ transactions }) {

    console.log("each customer ", transactions);
    const [filteredList, setFilteredList] = useState([]);

    const getLast3MonthsList = () => {
        let currentdate = new Date();
        let last3months = new Date(currentdate.setMonth(currentdate.getMonth() - 3)).toLocaleDateString();
        let filteredList = transactions.filter(trans => { return new Date(trans.date).toLocaleDateString() > last3months });
        //sorting data based on date 
        filteredList.sort(function(a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c-d;
        });
        return filteredList; 

    }

    useEffect(() => {
        //set filtered transaction list 
        setFilteredList(getLast3MonthsList());
        console.log(filteredList);

    }, [transactions])
    return (
        <>
            {filteredList.length > 0 ? (
                <MonthlyStatement filteredData={filteredList} />
            ) : (
                <h5>No MOnthly Data found</h5>
            )}
        </>
    )
}

{/* All tranaction details */ }
{/* {transactions.map(item => {
                return <ol>
                    <li>Transaction Date: {item.date}</li>
                    <li>Money Spent ${item.purchase} for the month.</li>
                <li>Reward Point(s) Earned: {totals.points}</li>
                </ol>
            })} */}