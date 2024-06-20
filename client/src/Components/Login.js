import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Helper/Context';
function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const {loggedIn ,setLoggedIn} =  useContext(UserContext)
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();   
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    if (!email || !password) {
      setLoginError('Please fill in both email and password fields.');
      return;
    }
    try {
     const {data} =await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password },{withCredentials:true});
      // const {user,message}= response.data;
      // handleLoginSuccess(user);
      setUser(data);
      setLoginError(''); 
      alert('Login Successfull');
      setLoggedIn(true); 
      navigate('/');
    }
     catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError('Incorrect email or password. Please try again.');
      } else {
        setLoginError('An error occurred. Please try again later.');
      }
    }
  }
  useEffect(() => {
    console.log("loggedIn state in Login component:", loggedIn);
  }, [loggedIn]);

return(
    <>
    <div className='flex flex-row  '>
    <div className='hidden w-1/2 h-screen   md:block lg:block xl:block bg-slate-400' >
      <img src="loginimage.png" alt="login" className='relative h-5/6  w-5/6 mx-auto my-auto'/>
    </div>
    <div className='w-screen   md:w-1/2 '>
    <div className='w-5/6 mx-auto border-1 border-blue-400 h-screen flex items-center'>
    <form className='w-full mx-auto ' onSubmit={handleLoginSubmit}>
   
    <div class="w-5/6   mx-auto">
    <div className='font-bold text-lg mb-5 mx-2'>Hello Again</div>
    <div className="mt-9 sm:mt-4 md:mt-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      <input type="text" value={email}  onChange={ev => setEmail(ev.target.value)} autoComplete="email" className="rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6" placeholder="Email"/>
    </div>
    <div className="mt-6 md:mt-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} className="rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Password"/>
    </div>
    <div className="flex justify-end mr-5 mt-5">
      <a href='#' className='italic font-bold underline'>forgot password?</a>
    </div>
    </div>
   
    <div className="md:mt-5 px-2 mt-5">
      <div className='text-center'>
        <button className="bg-lightblue rounded-md px-3 py-1.5 hover:bg-darkblue text-white" type="submit">Login</button>
      </div>
    </div>
    <div className="md:mt-5 px-2 mt-6">
      <div className='text-center'>
       <span>Not a user?<a href='/sign-up' className='px-5 italic font-bold underline text-lightblue'>Register here</a></span>
      </div>
    </div>
   
   
  </form>
</div>


    </div>
    </div>
    </>
);
}
export default Login;
