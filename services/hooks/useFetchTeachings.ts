"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchTeaching(): TTeachings[] {
    const [teachings, setTeachings] = useState<TTeachings[]>([]);

    useEffect(()=> {
        (async ()=> {
           try {
                const { data } = await axios.get<TTeachings[]>(`https://swalpa-backend.onrender.com/teaching`);
                console.log(data);
                setTeachings(data);
           } catch (error) {
            console.log(error);
           }
        })()
    }, [])

    return teachings;
}