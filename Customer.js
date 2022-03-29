
import TotalCard from "./TotalCard";
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
                               <TotalCard transactions={ele.transactions} />
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