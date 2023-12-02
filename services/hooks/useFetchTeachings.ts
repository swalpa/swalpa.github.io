"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchTeaching(): TeachingHighlights[] {
    const [teachings, setTeachings] = useState<TeachingHighlights[]>([]);

    useEffect(()=> {
        (async ()=> {
           try {
                const { data } = await axios.get<TeachingHighlights[]>(`${process.env.NEXT_PUBLIC_API_URL}/teaching`);
                console.log(data);
                setTeachings(data);
           } catch (error) {
            console.log(error);
           }
        })()
    }, [])

    return teachings;
}