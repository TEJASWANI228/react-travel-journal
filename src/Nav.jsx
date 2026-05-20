import './Nav.css'
import web from './assets/web.svg'
export default function Nav() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <img src={web} alt="web-icon" className="nav-icon" />
                    <h1>Travel Journal</h1>
                </div>
            </nav>
        </>
    )
}