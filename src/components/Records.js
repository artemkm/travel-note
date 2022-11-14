import React from "react"
import SingleRecord from "./SingleRecord"
import data from "./data"

export default function Records() {
    const records = data.map(item => {    
        return(
            <SingleRecord 
                key={item.id}
                item={item} 
            />
        )
    })

    return (
        <section className="records-list">
            {records}
        </section>
    )
}