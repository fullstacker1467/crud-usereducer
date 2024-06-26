import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { Add } from './pages/Add'
import { Edit } from './pages/Edit'
import { Detail } from './pages/Detail'

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'detail/:id',
          element: <Detail />
        },
        {
          path: 'add',
          element: <Add />
        },
        {
          path: 'edit/:id',
          element: <Edit />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
