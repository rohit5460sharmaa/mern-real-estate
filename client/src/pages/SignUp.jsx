import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Handle Change function
  const handleChange = (e) => {
    setFormData(
      {
        ...formData, //with the help of this it store the value 
        [e.target.id]: e.target.value,
      });
  };

  //HandleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    //fetch is a built-in JavaScript function
    //that allows you to make HTTP requests to servers. 
    // Here, it's being used to send a POST request. 

    try{
      setLoading(true);
      const res = await fetch('/api/auth/signup',      //proxy from vite.config.js
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), //convert js object into json fromat
      });
      const data = await res.json(); //response from server store into res & convert into json format
      console.log(data);
      if(data.success == false){
        setError(data.message);
        setLoading(false);
        return ;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');  // navigate to sign in page  loading false 
    }
      catch(error){
      setLoading(false);
      setError(error.message);
    }
   
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center front-semibold my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
        <input type="text" placeholder='username'
        className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3
        rounded-lg uppercase hover:opacity-95
        disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500-mt-5'>{error}</p>}         {/* show error on display */}

    </div>
  )
}
