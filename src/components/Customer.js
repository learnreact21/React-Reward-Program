const cardWidth = {
    width: "18rem"
}
export default function Customer({ data }) {
const nowDate =  new Date();
nowDate.setMonth(nowDate.getMonth() - 3);
console.log(nowDate.toLocaleDateString());
    return (
        <>
            {data.length > 0 ? (
                <ol className="text-primary">
                    {data.map((ele) => {
                        return <div className="card p-3 m-2" style={cardWidth}>
                            <h5 className="card-title">{ele.firstName},{ele.lastName} </h5>
                            <div className="card-body">
                                <p>Reward Point(s) Earned: {ele.rewardPoints}</p>
                                {/* <p>Total Ampunt Spent: {ele.transactions.purchase.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
)}
</p> */}
                            </div>
                        </div>
                    })}
                </ol>
            ) : (
                <>No results found!!</>
            )}
        </>
    )
}; 