import { Link, useLoaderData } from "react-router-dom";

const USer = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/user/${_id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert('Deleted successfully from database')
        }
    })
  };
  return (
    <div>
      <Link to="/">Home</Link>

      <h2>user {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default USer;
