import react from 'react'
import { useParams } from 'react-router'

export default function User() {
    const { id } = useParams();
    return(
        <>
        <h1 className="text-6xl bg-gray-600 p-4 text-center m-4 ">USER - {id}</h1>
        </>
    )
}