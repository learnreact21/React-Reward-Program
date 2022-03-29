
import CustomerCard from "./CustomerCard";
const cardWidth = {
    width: "18rem",
    border : "2px solid grey", 
    borerRadius: "25px"
}
const divStyle= {  display: "flex", 
flexDirection: "row"}
export default function Customer({ data }) {
const nowDate =  new Date();
nowDate.setMonth(nowDate.getMonth() - 3);
console.log(nowDate.toLocaleDateString());
    return (
        <>
            {data.length > 0 ? (
<div style={divStyle}>
                    {data.map((ele) => {
                        return <div className="card p-3 m-2" style={cardWidth}>
                            <h5 className="card-title">{ele.firstName},{ele.lastName} </h5>
                            <img src={ele.image} alt="Avatar" className="avatar" />
                            <div className="card-body">
                               <CustomerCard transactions={ele.transactions} key={ele.id} />
                            </div>
                        </div>
                    })}
                </div>
            ) : (
                <>No results found!!</>
            )}
        </>
    )
}; 