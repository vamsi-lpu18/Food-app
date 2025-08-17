
import { Link,useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useState } from "react";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const data=useCart();
  const navigate=useNavigate();
  const [cartView,setCartView]=useState(false);
   
  const handleLogout=()=>{
    localStorage.setItem('authToken',"");
    navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary text-4xl font-bold"  to="/">Navbar</Link>

        {/* Force show links: remove collapse behavior */}
        <div className="navbar-collapse d-flex align-items-center w-100">
          <ul className="navbar-nav mb-0">
            <li className="nav-item">
              <Link className="nav-link text-white active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white active" to="/Myorder">Myorder</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto gap-3">
           

            {
              localStorage.getItem("authToken") ? (
                <ul className="navbar-nav flex-row gap-3 mb-0">
                  <li className="nav-item">
                   <button className="btn btn-primary p-1.3 " onClick={()=>setCartView(true)}>My Cart {" "} {" "  }<Badge className=" text-white rounded bg-danger p-auto" >  {data.length}</Badge></button>
                  </li>
                  {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                  <li className="nav-item">
                    {/* <Link className="nav-link text-white" to="/logout">Logout</Link> */}
                    <button className="nav-link btn-danger text-white" onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav flex-row gap-3 mb-0">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-white"><button className="nav-link text-white text-4xl btn-danger">Login</button></Link>
                  </li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}