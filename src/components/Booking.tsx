import { useEffect, useState } from "react";
import BookingBody from "./Booking/Booking.Body";
import BookingTools from "./Booking/Booking.Tools";
import NavBar from "./NavBar";
import './booking.css'
import axios from "axios";
import { useThemeContext } from "../Context";


interface Props {
    setTheme: (theme: string) => void;
}

export default function Booking(props : Props) {
    const [res, setRes] = useState<any>()
    const [currentPage, setCurrentPage] = useState<any>(1)
    useEffect(() => {
        const data = async () =>{ 
            const response: any = await axios.get(`https://reqres.in/api/users?page=${currentPage}`)
            .catch( err => {
                console.error(err)
            })
            setRes(response)
        }
        data();
    },[currentPage])

    const theme = useThemeContext()
    return(
        <div className={`booking ${!theme.theme && 'dark'}`}>
            <NavBar setTheme={props.setTheme}/>
            <BookingTools setPage={setCurrentPage} currentPage={currentPage} />
            <BookingBody response={res}/>
        </div>
    )
}