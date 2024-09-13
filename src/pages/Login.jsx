import React, { useState } from 'react';
import key from '../assets/key.png';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <div className="bg-bg_light flex items-center justify-center h-screen">
                <div className="bg-white md:p-16 p-6 rounded-lg w-[40%] min-h-1/3 md:flex gap-4">
                    <div className='md:w-1/2'>
                        {/* <label class="text-gray-800 text-sm mb-2 block">User name</label> */}
                        <div class="relative flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute left-2" viewBox="0 0 24 24">
                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                            </svg>
                            <input name="username" type="text" required class="pl-7 w-full text-[#d9d9d9] font-extralight text-sm border border-[#d9d9d9] outline-blue-600 py-1" placeholder="Username" />

                        </div>
                        <div class="relative flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute left-2 text-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

                            <input name="password" type="text" required class="pl-7 w-full text-[#d9d9d9] font-extralight text-sm border border-[#d9d9d9] outline-blue-600 py-1" placeholder="Password" />

                        </div>
                        <div className=' font-thin text-sm mt-4 flex gap-2'>
                            <input type="checkbox" />
                            <p>Remember me <span className='text-[#694BDB] hover:text-[#3C1EAD] text-sm'>Forgot password</span></p>
                        </div>
                        <div className='font-extralight text-sm'>
                            <button class=" text-white  w-full py-1 mt-4  bg-[#694BDB] hover:bg-[#3C1EAD] cursor-pointer mb-1">Log in</button>
                            <p>Or <span className='text-purple'>register now!</span></p>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        {/* image */}
                        <img src={key} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

