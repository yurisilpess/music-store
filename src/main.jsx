import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import das dependencias

//react-router-dom
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

//routes
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Musicas from './routes/Musicas.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Home from './routes/Home.jsx'


//criando a funcao Browser Router

const router = createBrowserRouter([
  {
    //elemento pai

    path:'/',element:<App/>,
    errorElement:<Error/>,

    //elemento filho

    children:[
      {path:'/', element:<Home/>},
      {path:'/Login', element:<Login/>},
      {path:'/Musicas', element:<Musicas/>},
      {path:'/Sobre', element:<Sobre/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
