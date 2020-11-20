import React from "react";

function Card(props) {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img src={props.contact.imgUrl} alt="baby"/>
                <h3> {props.contact.name} </h3>
                <p>Phone: {props.contact.phone} </p>
                <p>Email: {props.contact.email} </p>
            </div>
             
        </div>
    )
}

export default Card;