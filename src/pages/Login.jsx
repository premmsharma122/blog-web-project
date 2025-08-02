
// import React from 'react';
// import { Login } from '../components';
// import authService from '../appwrite/auth';  // <-- Import authService

// function LoginPage() {
//   return (
//     <div className='py-8 flex flex-col items-center'>
//       <Login />
//       <button
//         onClick={() => authService.loginWithGoogle()}
//         className="bg-red-500 text-white px-4 py-2 rounded mt-4"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

// export default LoginPage;
import React from 'react';
import { Login } from '../components';
import authService from '../appwrite/auth';

function LoginPage() {
  return (
    <div className="py-8 flex flex-col items-center">
      <Login />
      <button
        onClick={() => authService.loginWithGoogle()}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;
