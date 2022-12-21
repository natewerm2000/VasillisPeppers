export default function Navbar(){
    return <nav className = "nav">
        <a href = "/" className = "site-title"> Naate</a>
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