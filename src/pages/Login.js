import React, { useState } from 'react';
import { login } from '../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(login(form.username));
    navigate('/', { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }

  return (
    <div className="bg-sky-300 min-h-screen p-10 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-96">
          <form className="grid grid-cols-1" onSubmit={submitHandler}>
            <h2 className="text-center mb-5 text-2xl font-bold">Login Page</h2>

            <label htmlFor="username"> Email Address </label>
            <input
              className="bg-gray-100 rounded-md mb-3 text-2xl"
              type="text"
              name="Email address"
              id="Email address"
              value={form.emailaddresss || ''}
              onChange={onChangeHandler}
            />
            <label htmlFor="password"> Password</label>
            <input
              className="bg-gray-100 rounded-md mb-3 focus:ring-2 text-2xl"
              type="password"
              name="password"
              id="password"
              value={form.password || ''}
              onChange={onChangeHandler}
            />

            <br></br>

 

            <button
              type="submit"
              className="bg-sky-500 p-1 rounded-full text-white px-4 hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Login
            </button>

            <div className="mt-5 text-sm text-gray-500">
              <button className=" mt-1 underline">Forgot password?</button>{' '}
              <br />
              <button className=" mt-1 underline">
                Don't have account? <span > Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
