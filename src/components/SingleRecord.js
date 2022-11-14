import React from "react"

export default function SingleRecord(props) {
    return(
        <div className="single-record">
            <img src={props.item.imageUrl} className="record-pic" />
            <div className="record-contents">
                <div className="contents-header"><img src="images/location-bullet.png" width="7" height="10" /> {props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></div>
                <div className="contents-title">{props.item.title}</div>
                <div className="contents-dates">{props.item.startDate} - {props.item.endDate}</div>
                <div className="contents-description">{props.item.description}</div>
            </div>
        </div>
    )
}