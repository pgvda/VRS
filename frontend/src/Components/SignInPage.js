import React, {useState} from 'react'
import '../Css/SignInPageStyle.css'
import SignInDash from './SignInDash'
import { useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
import PopUp from './Popup';

export default function Signin() {

  const [showPopUp, setShowPopUp] = useState(true);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  

  const sendData = async (e) => {
    console.log(email,password);
    e.preventDefault();

    try{
      const config={
        headers:{
          "content-type":"application/json",//not must
        },
      };
      const{data}=await axios.post('http://localhost:8080/user/login',
    {
      email,password,
    },config
    );
    
    Cookies.set('userInfo', JSON.stringify(data), { expires: 7 });
    if (data.designation=="user") {
      navigate('/user'); // Redirect to the admin page
    } else if (data.designation=="head"){
      navigate('/head'); // Redirect to the customer page
    }else if (data.designation=="ar"){
      navigate('/ar');
    }else{
      alert("wrong email or password")
    }


    // To retrieve the user information from the cookie
const userInfoFromCookie = Cookies.get('userInfo');

// If you want to parse the JSON data
const parsedUserInfo = userInfoFromCookie ? JSON.parse(userInfoFromCookie) : null;

// Now 'parsedUserInfo' contains the user information retrieved from the cookie
console.log(parsedUserInfo);
    }catch(error){

    }
  };
  return (
    <div>
      <div></div>
      
    <div className='min-vh-100'>
      
      <div class="row"> 
        <div class="columLleft">
          <SignInDash/>

        </div>
        
        <div class="columnRight min-vh-100">
          <div>
            <div className='signin'>
              <div className="row61">
                <div className="column61" > 
                  <img className="img61" src={require('../Images/sign4.png')} ></img>  
                </div>
                <div className="column62" >               
                  <form className='form61' onSubmit={sendData}>
                    <img className="img-log61" src={require('../Images/logo4.png')}></img>
                    <div className="mb-3">
                      <label  className="form-label">Email address</label>
                      <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">Password</label>
                      <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control border border-dark" id="exampleInputPassword1"/>
                    </div>           
                     <button  type="Sign In"  className="btnSign btn-primary">SIGN IN</button>
                  </form>
                </div>
                {showPopUp && <PopUp onClose={handleClosePopUp} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
