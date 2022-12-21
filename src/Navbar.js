export default function Navbar(){
    return <nav className = "nav">
        <a href = "/" className = "site-title"> Site Name</a>
        <ul>
            <li>
                <a href = "/shop">Shop</a>
            </li>
            <li>
                <a href = "/contact">contact</a>
            </li>
        </ul>
    </nav>
}