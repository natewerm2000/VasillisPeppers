import companyLogo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return <nav className = "nav">
        <a href = "/" className = "site-title"><img src={companyLogo} alt=""/></a>
        <ul>
            <li>
                <a href = "/shop">Shop<FontAwesomeIcon icon = {faCartShopping}/></a>
            </li>
            <li>
                <a href = "/contact">Contact<FontAwesomeIcon icon = {faAddressCard}/></a>
            </li>
        </ul>
    </nav>
}