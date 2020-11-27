import React, {useState, useEffect} from "react"

const EditUserForm = (props) => {
    useEffect (() => {
        setUser(props.currentUser)
    }, [props])
    
    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }
    
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <button onClick={handleSubmit}>Edit User</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUserForm;