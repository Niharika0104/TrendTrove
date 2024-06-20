import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Register(){
  const [email,setEmail]=useState('');
  const [name ,setName] =useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState('');
  const [success,setSuccess]=useState('');
  const navigate = useNavigate();   

 
 // here created the sign up logic of register 
  async function registerUser(ev){
    ev.preventDefault();
    setError('');
    setSuccess('');
    
    if(!name || !password ||!email){
      setError('All fields are required')
    }
     try {
      await axios.post(`${process.env.REACT_APP_API_URL}/register`,{
            name,
            email,
            password,

      });
      
      setSuccess('Registration Successful! Now you can login.');
      console.log(name)
      navigate('/login');
      
     }
     catch(ev){
      alert('Registration Failure');
    }
 }



return(
    <>
    <div className='flex flex-row  '>
    <div className='hidden w-1/2 h-screen   md:block lg:block xl:block bg-fuchsia-400' >
      <img src="loginimage.png" alt="login" className='relative h-5/6  w-5/6 mx-auto my-auto'/>
    </div>
    <div className='w-screen   md:w-1/2 '>
    <div className='w-5/6 mx-auto border-1 border-blue-400 h-screen flex items-center'>
     <form className='w-full mx-auto ' onSubmit={registerUser} >
   
    <div class="w-5/6   mx-auto">
    <div className="mt-6 sm:mt-4 md:mt-5 flex rounded-md shadow-sm ring-1 ring-inset
     ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      
      <input type="text" value={name}  onChange={ev => setName(ev.target.value)} className="rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6" placeholder="Full Name"/>
    </div>
    
    <div className="mt-6 sm:mt-4 md:mt-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
     
      <input type="text" value={email}  onChange={ev => setEmail(ev.target.value)} autoComplete="email" className="rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6" placeholder="Enter email"/>
    
    </div>
    <div className="mt-6 md:mt-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      <input type="password" value={password}  onChange={ev => setPassword(ev.target.value)} className="rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter password"/>
    </div>
   

    </div>
    {error && <p className='text-red-500 text-center'>{error}</p>}
    {success && <p className='text-green-500 text-center'>{success}</p>}
   
    <div className="md:mt-6 px-2 mt-8">
      <div className='text-center'>
        <button className="bg-lightblue rounded-md px-3 py-1.5 hover:bg-darkblue text-white" type="submit">Register</button>
      </div>
    </div>
    <div className="md:mt-5 px-2 mt-6">
      <div className='text-center'>
       <span>Already a user?<a href='/login' className='px-5 italic font-bold underline text-lightblue'>Signin here</a></span>
      </div>
    </div>
  </form>
</div>


    </div>
    </div>
    </>
);
}
export default Register;
