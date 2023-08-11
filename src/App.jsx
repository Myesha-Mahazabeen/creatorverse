import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreator'
import ViewCreator from './pages/ViewCreator'
import '@picocss/pico'
import './App.css'

function App() {
  const creatorverseRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
            index: true,
            element: <ShowCreator />
        },
        {
            path: '/new',
            element: <AddCreator />
        },
        {
            path: '/:id',
            element: <ViewCreator />
        },
        {
            path: '/edit/:id',
            element: <EditCreator />
        }
      ]
    },
])

  return (
      <>
         <RouterProvider router={creatorverseRouter}>

         </RouterProvider>
      </>
  )
}

export default App
