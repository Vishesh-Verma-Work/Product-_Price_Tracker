import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
// import  './app.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Email = () => {

//   const callTost = ()=> {
//     toast.success("Email Send Succesfully" , {
//       position : "top-center"
//     }); return callTost;
//   }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const serviceId = 'service_bozbnky';
    const templateId = 'template_2w5n65o';
    const publicKey = '9lhg3uADcyc7lMVQX';


    const templateParams = {
      cus_name: name,
      from_email: email,
    };


    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
    <form  className="emailForm p-8 bg-white border rounded shadow-md">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none"
      >
        Send Email
      </button>
     
    </form>
  </div>
  )
}

export default Email;