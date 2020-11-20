import React from "react";

function FormComponent (props) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="First Name" 
                name="firstName"
                value={props.data.firstName}
                onChange= {props.handleChange}
            />
            <input 
                type="text" 
                placeholder="Last Name" 
                name="lastName"
                value={props.data.lastName}
                onChange= {props.handleChange}
            />
            <input 
                type="number" 
                placeholder="Age" 
                name="age"
                value={props.data.age}
                onChange= {props.handleChange}
            />
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={props.handleChange}
                    checked= {props.data.gender === "Male"}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={props.handleChange}
                    checked= {props.data.gender === "Female"}
                />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Wahala"
                    onChange={props.handleChange}
                    checked= {props.data.gender === "Wahala"}
                />
                Wahala
            </label>
            < br/>
            <label>
                To :
               <select 
                    onChange={props.handleChange} 
                    name="location"
                    value={props.data.location}
                >
                    <option disabled >Select Location</option>
                    <option>Singapore</option>
                    <option>Texas</option>
                    <option>London</option>
                    <option>Lagos</option>
                </select> 
            </label>
            < br/>
            <label>
                <input 
                    type="checkbox" 
                    name="isVegan"
                    checked={props.data.isVegan}
                    onChange={props.handleChange}
                /> Vegan ?
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="isKosher"
                    checked={props.data.isKosher}
                    onChange={props.handleChange}
                /> Kosher ?
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="isLactoseFree"
                    checked={props.data.isLactoseFree}
                    onChange={props.handleChange}
                /> LactoseFree ?
            </label>   
            
            <hr/>
            <h2>FirstName: {props.data.firstName} </h2>
            <h2>LastName: {props.data.lastName} </h2>
            <h2>Age: {props.data.age} </h2>
            <h2>Gender: {props.data.gender} </h2>
            <h2>Location: {props.data.location} </h2>
            <p> Your Dietary Restrictions: </p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No" }</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No" }</p>
            <p>LactoseFree: {props.data.isLactoseFree ? "Yes" : "No" }</p>
            
        </form>
    )
}
export default FormComponent;