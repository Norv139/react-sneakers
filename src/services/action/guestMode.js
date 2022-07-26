import { setUserData, setLogin } from "../redusers/user"

export const guestMode = ()=>dispatch=>{
    dispatch(
        setUserData(
            {
                name: 'NoName',
                email:'NoName@gmail.com',
                password: 'AnY_1337',
            }
        )
    )
    dispatch(setLogin(true))
}