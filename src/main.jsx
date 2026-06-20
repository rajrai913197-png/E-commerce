
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import'./navbar/nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contaxt from "./navbar/context"
import { ToastContainer } from 'react-toastify';
import WishCon from './navbar/contextWish.jsx';
createRoot(document.getElementById('root')).render(
  <Contaxt >
    <WishCon>
      <App />
        <ToastContainer/>
    </WishCon>
    </Contaxt>

)
