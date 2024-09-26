import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import das dependencias

//react-router-dom
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

//routes
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Produtos from './routes/Produtos.jsx'
import Contato from './routes/Contato.jsx'
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
      {path:'/Contato', element:<Contato/>},
      {path:'/Produtos', element:<Produtos/>},
      {path:'/Sobre', element:<Sobre/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
