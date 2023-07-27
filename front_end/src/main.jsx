import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx'
import App from './routes/App.jsx'
import WorldView from './routes/WorldView.jsx'


const router = createBrowserRouter([
  {path: '/',
  element: <Login/>
},
{
  path: '/app/',
  element: <App/>
},
{
  path: '/world/',
  element: <WorldView/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
