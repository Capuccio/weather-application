import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import navigator from './Navigator'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={navigator} />)