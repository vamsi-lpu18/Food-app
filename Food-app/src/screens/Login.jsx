import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { getApiUrl } from '../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch(getApiUrl('/api/login'),{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
      });
      if(response.ok){
        const data = await response.json();
        if(data.success){
          localStorage.setItem('email',email);
          localStorage.setItem('authToken', data.authToken);
          alert("Logged in successfully");
          setEmail('');
          setPassword('');
          navigate('/');
          console.log(localStorage.getItem('authToken'));
        }
      }else {
        const errorData = await response.json();
        alert(errorData.errors || "Wrong credentials");
      }
    }catch(err){
      alert('NetWork error');
    }
  }
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
  <div className="form-group mt-5">
    <label>Email address</label>
    <input type="email"className='form-control' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary m-3">Submit</button>
  <Link to='/create' className="btn btn-secondary">I'm a new user</Link>
</form></div>
    </>
  )
}

export default Login
