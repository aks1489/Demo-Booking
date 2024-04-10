import { useThemeContext } from '../Context'
import './navbar.booking.css'
export default function NavBar() {

    const theme = useThemeContext()
    return(
        <nav className={`navbar navbar-expand-lg p-1 px-2 ${!theme.theme && 'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand fw-semibold text-primary" href="#">Studio Namaste</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse px-5" id="navbarSupportedContent">
                    <div className="nav-item d-flex justify-content-center align-items-center gap-2">
                        <img className="user_img m-0 p-0" src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="user img" />
                        <p className={`p-0 m-0 text-secondary ${!theme.theme && 'dark'}`}>User Name</p>
                    </div>
                    <ul className="navbar-nav align-items-center gap-3 mb-2 px-sm-1 mb-lg-0">
                        <li className="nav-item">
                            <button className={`nav-link btn rounded-pill btn-light px-3 active ${!theme.theme && 'dark'}`} aria-current="page" >Shedule</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn rounded-pill btn-light px-3 ${!theme.theme && 'dark'}`} aria-current="page" >Videos</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn rounded-pill btn-light px-3 ${!theme.theme && 'dark'}`} aria-current="page" >Pricing</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn rounded-pill btn-light px-3 ${!theme.theme && 'dark'}`} aria-current="page" >About</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn rounded-pill btn-light px-3 ${!theme.theme && 'dark'}`} aria-current="page" >Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}