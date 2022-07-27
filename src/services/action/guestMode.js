import { setUserData, setLogin } from "../redusers/user"
import { saveCard } from "../redusers/user"

export const guestMode = ()=>dispatch=>{
    dispatch(
        setUserData(
            {
                name: 'NoName',
                email:'NoName@gmail.com',
                password: 'AnY_1337',
            }
        )
    );
    dispatch(saveCard(
        {
            name: 'NoName',
            number: '1337-2280-7777-83989',
            data: '11/2032',
            security:'228',
            zipCode:'123228123'
        }
    ))
    dispatch(setLogin(true))
}