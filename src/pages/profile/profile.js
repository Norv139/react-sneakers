import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { guestMode } from "../../services/action/guestMode"

function Profile (){
    const dispatch = useDispatch()


    const userData = useSelector(store=>store.user.userData)


    return(
        <main className="content p-40">

            <ul className="content__frame mb-10">  
                <li className="ml-10 mb-10 mt-10">
                    Name: {userData.name}
                </li>
                <li className="ml-10 mb-10" >
                    E-mail: {userData.email}
                </li>
            </ul>

            <button onClick={()=>{dispatch(guestMode())}}>Редактировать</button>

        </main>
    )
}
export default Profile