import React from 'react';
import './Login.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // Move useNavigate outside the useEffect

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/token',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        localStorage.clear();
        localStorage.setItem('access_token', response.data.access);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
        setToken(response.data.access);

        // Use the navigate function here
        navigate('/UserProfile', { state: { token: response.data.access } });
      }
    } catch (error) {
      console.log(error?.response?.status);
      // Handle error
    }
  };


  // useEffect to retrieve the token when the component mounts

    
  


  return (
    <div>
      <div class="login-page">
      <div class="form container">
      <p>Login</p>
      <div>
        <img src="/Mobile login-rafiki.png" alt="Mobile Login" width="250px" height="250px" />
          </div>
          <form class="login-form" onSubmit={(e) => submitForm(e)}>
        <input type="text" placeholder="email" name="email"/>
        <input type="password" placeholder="password" name="password"/>
        <button type="submit">Login</button>
        <p class="message">Already registered? <a href="signup.html">Sign Up</a></p>
      </form>

      </div>
      </div>
    </div>
  )
  };

