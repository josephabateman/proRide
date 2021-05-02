import React from 'react'

function ServicesHeader(props) {
    return (
        <div>
            <span className="service-icons"><i className={props.fontAwesomeIcon}></i></span>
            <h2>{props.name}</h2>
        </div>
    )
}

function ServicesCard(props) {
    return (
        <div className="card-body">
        <a href={props.flyer}  target="_blank">
            <button type="button" className="btn btn-outline-info">More info (printable pdf)</button>
            </a>
            {props.flyer2 ? <a href={props.flyer2}  target="_blank">
            <button type="button" className="btn btn-outline-info">Extra info (printable pdf)</button>
            </a> : ''}
        <h3>{props.header}</h3>
        {props.description}
        </div>
    )
}

export { ServicesHeader, ServicesCard };