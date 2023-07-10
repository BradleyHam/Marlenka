import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io';

function EmailForm(props) {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
          alert('Email is submitted');
          // Insert your logic here to handle the email
        } else {
          alert('Please enter a valid email');
        }
      };

      const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };
    
  return (
    <form onSubmit={handleSubmit} className={`relative  mt-3 ${props.hero && 'md:w-[500px]'} ${props.lightBackground && 'border rounded-md'}`}>
    <input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={handleChange}
        required
        className={`w-full px-3 py-3 placeholder-gray-400 text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
    />
    <button 
        type="submit" 
        className={`absolute inset-y-0 right-0 flex items-center mx-1 px-5 my-1 rounded-md text-primary ${props.lightBackground ? 'bg-[#4d4f5c]' : 'bg-primary-color'}`}
    >
    <IoIosSend color={`${props.lightBackground ? 'white' : '#f3dcaa'}`}/>
    <span className={`hidden sm:block pl-1 uppercase font-bold text-xs tracking-wide ${props.lightBackground ? 'text-white' : 'text-feature-color'}`}>Submit</span>
  </button>
  </form>
  )
}

export default EmailForm