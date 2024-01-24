import React from "react"

export default function Poi(props) {
    return (
        <>
    <div className="poi">
        <img src={`../images/${props.image}`} className="poi--image" />
        <div className="poi--locationinfo">
            <img src="./images/poi-image.png" className="poi--logo"/>
            <span className="poi--country">{props.country}</span>
            <a className="poi--link" href={props.link}><span>View on Google Maps</span></a>
            <h1 className="poi--title">{props.title}</h1>
            <h2 className="poi--date">{props.date}</h2>
            <p className="poi--description">{props.description}</p>
        </div>
    </div>
    <hr className="poi--divider"></hr>
    </>
    )
}
