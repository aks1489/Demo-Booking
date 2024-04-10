import { useThemeContext } from '../../Context'
import './booking.modal.css'

export default function BookingModal(props: any) {

    const theme = useThemeContext()
    return(
            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-theme={!theme.theme && 'dark'} >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header gap-2">
                        <img className="user_img_thumb" src={props.userData.avatar} alt="user_img" />
                        <h1 className={`modal-title fs-5 ${!theme.theme && 'dark'}`} id="exampleModalLabel">{props.userData.first_name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className={`${!theme.theme && 'dark'}`}>{props.userData.email}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary rounded-pill px-3">Book</button>
                        <button type="button" className="btn btn-secondary rounded-pill px-3" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
    )
}