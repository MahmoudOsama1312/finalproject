import './App.css';
import {createBrowserRouter , Navigate, RouterProvider} from 'react-router-dom';
import MasterRouting from './components/MasterRouting/MasterRouting';
import Home from './components/Home/Home';
import About from './components/About/About';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import Notfound from './components/NotFound/NotFound';
import People from './components/People/People';
import Register from './components/Register/Register';
import Tvshows from './components/Tvshows/Tvshows';
import Logout from './components/Logout/Logout';
import { useContext } from 'react';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContext } from './components/Context/AuthStore.js';

function App() {

  let { userData, logout, userInfo } =useContext(AuthContext)
  

  let routes = createBrowserRouter([{
    path: "/", element: <MasterRouting userData={userData} logout={logout} /> ,errorElement:<Notfound/>, children: [
      { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      {path: 'about', element: <ProtectedRoute><About /></ProtectedRoute>},
      { path: 'details/:id/:mediaType', element: <ProtectedRoute> <Details /></ProtectedRoute> },
      { path: 'tvshows', element: <ProtectedRoute> <Tvshows /></ProtectedRoute> },
      { path: 'movies', element: <ProtectedRoute> <Movies /></ProtectedRoute> },
      { path: 'people', element: <ProtectedRoute><People /></ProtectedRoute> },
      { path: 'profile', element: <ProtectedRoute> <Profile userData={userData} /></ProtectedRoute> },
      {path: 'login', element: <Login userInfo={userInfo } /> },
      {path: 'register', element: <Register /> },
      {path: 'logout', element: <Logout /> },

    ]
  }])


  return (
    <>
      <RouterProvider router={routes} />

      

    </>
  );
}

export default App;
