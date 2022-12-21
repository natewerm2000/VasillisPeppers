import companyLogo from './images/logo.png';
export default function Navbar(){
    return <nav className = "nav">
        <a href = "/" className = "site-title"><img src={companyLogo} alt="BigCo Inc. logo"/></a>
        <ul>
            <li>
                <a href = "/shop">Shop</a>
            </li>
            <li>
                <a href = "/contact">Contact</a>
            </li>
        </ul>
    </nav>
}