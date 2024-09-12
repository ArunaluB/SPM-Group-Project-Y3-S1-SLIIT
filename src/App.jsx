import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomePage from './component/Home/home'
import DashboardPage from './component/dashboard/dashboard'
import Chatapp from './component/chatpage/chatpage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><HomePage /> </div>
  },
  {
    path: '/dashboard',
    element: <div><DashboardPage /> </div>,
    children: [
      { path: '/dashboard/chats/:id', element: <div><Chatapp /> </div> }
    ]
  } ,

])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
