import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchGreetings } from "../redux/greeting/greeting";

const Greeting = () =>{
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting)
    console.log({ greeting, loading})
    useEffect(() =>{
        if (loading) { return }
        setLoading(true)
        dispatch(fetchGreetings()).then(response => {
            setLoading(false)
            console.log({ response })
        }).catch(() => {
            setLoading(false)
        })
    }, []);

    return(
        <>
        <h1>{greeting.message}</h1>
        </>
    )
}

export default Greeting;