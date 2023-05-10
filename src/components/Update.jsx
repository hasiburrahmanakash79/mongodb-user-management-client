import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const LoadUser = useLoaderData()

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email =  form.email.value 
        console.log(name, email);
        const updateUser = {name, email}

        fetch(`http://localhost:5000/user/${LoadUser._id}`, {
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('update successful')
        })
    }
    return (
        <div>
            <Link to='/user'>All User</Link>
            <h2>Update information for: {LoadUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={LoadUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={LoadUser.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;