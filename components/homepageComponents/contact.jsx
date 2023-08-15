import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle your form submission logic
    }
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-t-2 flex flex-col xl:flex-row w-[100vw] bg-[#f3dcaa24]'>
        <div className="text flex-1 mr-10">
            <h2 className="">Contact</h2>
            <h3>Experience the sweetness of connection</h3>
            <p className='pt-4'> We&apos;re thrilled to have you as part of our honey cake family. At Marlenka Honey Cake, New Zealand, every cake we bake is not just a recipe but a symbol of our shared love for authentic, delicious, and soulful flavours. Our team is always eager to hear from you, to understand your experiences, your feedback, and any unique way you&apos;ve enjoyed our honey cake. Please feel free to share your thoughts, your honey cake moments, or any queries you might have. All you need to do is fill in your details below and we promise to get back to you with the warm hospitality that our Marlenka family is known for. Let&apos;s keep the conversation as sweet as our cakes!</p>
        </div>
        <form className="bg-gray-100 xl:w-[500px] w-[100%] rounded p-6 pb-8 mb-4 mt-8 xl:mt-0 xl:ml-10" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-secondary-color text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="white appearance-none rounded w-full py-2 px-3 focus:outline-none"
                            id="name"
                            type="text"
                            placeholder="Your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-secondary-color text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="white appearance-none rounded w-full py-2 px-3 focus:outline-none"
                            id="email"
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-secondary-color text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="white appearance-none rounded w-full py-2 px-3 focus:outline-none"
                            id="message"
                            placeholder="Your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    <button 
                        type="submit" 
                        className={`px-5 py-3 font-bold text-xs rounded-md bg-[#4d4f5c]`}
                       >
                        <span className={` uppercase text-white`}>Submit</span>
                    </button>
                    </div>
            </form>
    </div>
  )
}

export default Contact
