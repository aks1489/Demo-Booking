import { useState } from 'react'
import BookingModal from './Booking.Modal'
import './booking.body.css'

export default function BookingBody(props: any) {
    const[userData,setUserData] = useState({})


    const res = props.response ? props.response.data.data : null

    const handleClick = (user) => {
        setUserData(user)
    }

    const renderData = () => {
        if(res) {
            return res.map((user,index) => {
                return (
                    <div key={index} className="row my-3 d-flex align-items-center">
                        <p className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4 m-0 fw-normal text-light-emphasis d-flex flex-row-reverse">08:20</p>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4 d-flex justify-content-center">
                            <img className=' m-0 user_img_thumb' src={user.avatar} alt={user.first_name} />
                        </div>
                        <p className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4 m-0 ps-2 fw-normal text-light-emphasis d-flex flex-row'>{user.first_name}</p>
                        <p className='col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 m-0 fs-5 fw-bolder text-primary d-flex justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center'>
                            {user.email}
                        </p>
                        <button type="button"
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal" 
                            className='btn btn-primary rounded-pill col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 m-0 fw-medium border-3' 
                            onClick={() => handleClick(user)}
                            >
                                Book Now
                        </button>
                        <BookingModal userData={userData}/>
                    </div>
                    )
                })
            
        } else {
            return "Table is loading..."
        }
    }

    return (
            <div className="container p-5 mt-2 booking_body rounded-4">
                    {renderData()}
                    {/* <button type="button" className='btn btn-outline-primary rounded-pill col-2 m-0 fw-medium border-2' >Cancle</button> */}
            </div>
    )
}