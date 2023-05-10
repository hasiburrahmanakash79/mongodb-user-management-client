
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}

    fetch('http://localhost:5000/user',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      alert('user added successfully')
      form.reset()
    })
  }

  return (
    <>
      <h1>Simple MongoDB</h1>
      <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <input type="submit" value="Add user" />
      </form>
      <br />
      <Link to="/user" className=''>User</Link>
    </>
  )
}

export default App
