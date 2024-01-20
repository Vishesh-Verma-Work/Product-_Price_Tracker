import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './contexts/AuthProvider.jsx'
import router from './Router/Router.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </AuthProvider>
)
