import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { getApiUrl } from '../config';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    const response = await fetch(getApiUrl("/api/create"),{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        password:password,
        email:email,
        location:"" // Backend expects location field
      })
      
    })
    
    if(response.ok) {
      const result = await response.json();
      alert("User created successfully!");
      console.log(result);
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
    } else {
      const errorData = await response.json();
      alert("Error: " + JSON.stringify(errorData.errors));
    }
  }catch(err){
    console.log(err);
    alert("Network error occurred");
  }
  }
  return (
    <>
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" name='name'/>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" name='email'/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} name='password'/>
  </div>
  
  <button type="submit" className="btn btn-success m-3">Submit</button>
  <Link to="/login" className="btn btn-danger">Already have an account? Login   </Link>
</form>
</div>
    </>
  )
}

export default Signup
