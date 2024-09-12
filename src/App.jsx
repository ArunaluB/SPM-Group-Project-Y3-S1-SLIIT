import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './component/Home/home'
import RootLayout from './layouts/rootlayout/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout'
import DashboardPage from './component/dashboard/dashboard'
import Chatapp from './component/chatpage/chatpage'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatapp />
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
