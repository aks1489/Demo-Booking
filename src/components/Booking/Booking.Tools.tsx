import { useThemeContext } from '../../Context';
import './booking.tools.css'

interface Props {
    setPage: React.Dispatch<React.SetStateAction<number>> ;
    currentPage : number
}

export default function BookingTools(props: Props) {

    const nextPage = () =>{
        props.setPage(prv => {
            return props.currentPage === 2 ? 2 : prv + 1
        })
    }

    const prvPage = () => {
        props.setPage(prv => {
            return props.currentPage === 1 ? 1 : prv - 1
        })
    }

    const theme = useThemeContext()

    return (
        <div className="container mt-5" data-bs-theme={!theme.theme && 'dark'}>
            <div className="date d-flex flex-row-reverse gap-1">
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary fw-medium border-2 border-light-subtle rounded-pill px-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        This week
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">To be added</a></li>
                        <li><a className="dropdown-item" href="#">To be added</a></li>
                        <li><a className="dropdown-item" href="#">To be added</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">To be added</a></li>
                    </ul>
                </div>
                <button type="button" className="btn text-success-emphasis fw-medium" onClick={nextPage}><i className="bi bi-chevron-right"></i></button>
                <button type="button" className="btn text-success-emphasis fw-medium" onClick={prvPage}><i className="bi bi-chevron-left"></i></button>
                <p className="p-0 m-0 d-flex align-items-center text-success-emphasis fw-medium">22 January 2022</p>
            </div>
        </div>
    )
}