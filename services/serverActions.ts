import axios from "axios"

const server: string = process.env.NEXT_PUBLIC_API_URL as string;

export const getUpdates = async () => {
    try {
        const { data } = await axios.get<updateType[]>(`${server}/updates`)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getInternshipData = async () => {
    try {
        const { data } = await axios.get<InternshipDetailsWithProfiles>(`${server}/internship/6554367889b517b7ec08e404`)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getPublications = async () => {
    try {
        const { data } = await axios.get<Publication[]>(`${server}/publications`)
        return data
    } catch (error) {
        console.log(error)
        return false

    }
}

export const getTeachings = async () => {
    try {
        const { data } = await axios.get<TeachingHighlights[]>(`${server}/teaching`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getAchievements = async () => {
    try {
        const { data } = await axios.get<AchievementType[]>(`${server}/achievements`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getProjects = async () => {
    try {
        const { data } = await axios.get<ProjectType[]>(`${server}/projects`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getSpecificProject = async (id: string) => {
    try {
        const { data } = await axios.get<ProjectType>(`${server}/projects/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getSpecificTeaching = async (id: string) => {
    try {
        const { data } = await axios.get<TeachingAllDetails>(`${server}/teaching/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getTeachingIds = async () => {
    try {
        const { data } = await axios.get<{ _id: string}[]>(`${server}/teaching/ids`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export const homePageUpdates = async () => {
    try {
        const { data } = await axios.get<UpdateAndGoogleScholarStats>(`${server}/updates/featured-updates-and-google-scholar-stats`);
        return data
    } catch (error) {
        console.log(error);
        return false
    }
}