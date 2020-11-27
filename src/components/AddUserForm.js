import React, {useState} from "react";

const AddUserForm = (props) => {
    const initUser = {id: null, name: "", username: ""};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <button>Add User</button>
        </form>
    )
}

export default AddUserForm;