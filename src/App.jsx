import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await authService.getCurrentUser();
  //     if (user) {
  //       dispatch(login({ userData: user }));
  //     } else {
  //       dispatch(logout());
  //     }
  //     setLoading(false); // ✅ Set this
  //   };
  //   fetchUser();
  // }, [])
useEffect(() => {
  const fetchUser = async () => {
    try {
      const user = await authService.getCurrentUser();
      console.log("Fetched User: ", user);
      if (user) {
        dispatch(login({ userData: user }));
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.error("Error fetching user: ", err);
    } finally {
      setLoading(false);
    }
  };
  fetchUser();
}, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
