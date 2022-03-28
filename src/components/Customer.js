
export default function Customer({ data }) {
    return (
        <>
            {data.length > 0 ?(
                <>
                there is more data
                </>
            ) : (
            <>No results found!!</>
    )}
        </>
    )
}; 