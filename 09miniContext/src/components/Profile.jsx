import {useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext);
    if(!user) return (<div>Please Login First </div>) 

    return(
        <h1>Welcome {user.username}</h1>
    )
}