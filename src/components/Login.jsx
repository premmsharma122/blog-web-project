import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice';
import authService from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  // Check if user is logged in after page load
  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(authLogin({ userData: user }));
          navigate('/');
        }
      } catch {
        // Do nothing on error
      }
    };
    checkUser();
  }, [dispatch, navigate]);

  // Email/password login handler
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin({ userData }));
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold mb-6">Sign in to your account</h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
