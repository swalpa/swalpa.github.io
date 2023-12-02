"use server"
import axios from "axios"

export const getUpdates = async () => {
    try {
        const { data } = await axios.get<updateType[]>(`${process.env.NEXT_PUBLIC_API_URL}/updates`)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getInternshipData = async () => {
    try {
        const { data } = await axios.get<InternshipDetailsWithProfiles>(`${process.env.NEXT_PUBLIC_API_URL}/internship/6554367889b517b7ec08e404`)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getPublications = async () => {
    try {
        const { data } = await axios.get<Publication[]>(`${process.env.NEXT_PUBLIC_API_URL}/publications`)
        return data
    } catch (error) {
        console.log(error)
        return false

    }
}

export const getTeachings = async () => {
    try {
        const { data } = await axios.get<TeachingHighlights[]>(`${process.env.NEXT_PUBLIC_API_URL}/teaching`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getAchievements = async () => {
    try {
        const { data } = await axios.get<AchievementType[]>(`${process.env.NEXT_PUBLIC_API_URL}/achievements`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getProjects = async () => {
    try {
        const { data } = await axios.get<ProjectType[]>(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getSpecificProject = async (id: string) => {
    try {
        const { data } = await axios.get<ProjectType>(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getSpecificTeaching = async (id: string) => {
    try {
        const { data } = await axios.get<TeachingAllDetails>(`${process.env.NEXT_PUBLIC_API_URL}/teaching/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}