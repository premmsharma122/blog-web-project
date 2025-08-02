// import { Client, Account, ID } from 'appwrite';

// const client = new Client();

// client
//     .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
//     .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const account = new Account(client);

// const authService = {
//     createAccount: ({ email, password, name }) => {
//         return account.create(ID.unique(), email, password, name);
//     },

//     login: ({ email, password }) => {
//         return account.createEmailPasswordSession(email, password); // ✅ Correct
//     },

//     getCurrentUser: () => {
//         return account.get();
//     },

//     logout: () => {
//         return account.deleteSession('current');
//     },
// };

// export default authService;
// // authService.js
// import { Client, Account, ID } from 'appwrite';

// const client = new Client();

// client
//   .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const account = new Account(client);

// const authService = {
//   createAccount: ({ email, password, name }) => {
//     return account.create(ID.unique(), email, password, name);
//   },

//   login: ({ email, password }) => {
//     return account.createEmailPasswordSession(email, password);
//   },

//   loginWithGoogle: () => {
//     return account.createOAuth2Session('google', 'http://localhost:5173', 'http://localhost:5173');
//   },

//   getCurrentUser: () => {
//     return account.get();
//   },

//   logout: () => {
//     return account.deleteSession('current');
//   },
// };

// export default authService;
import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

const authService = {
  createAccount: ({ email, password, name }) => {
    return account.create(ID.unique(), email, password, name);
  },

  login: ({ email, password }) => {
    return account.createEmailPasswordSession(email, password);
  },

 

  getCurrentUser: () => {
    return account.get();
  },

  logout: () => {
    return account.deleteSession('current');
  },
};

export default authService;
