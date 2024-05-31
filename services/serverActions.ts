import { TProject } from "@/lib/validations/project";
import axios from "axios";

const server: string = process.env.NEXT_PUBLIC_API_URL!;


export const getInternshipData = async () => {
  try {
    const { data } = await axios.get<InternshipDetailsWithProfiles>(
      `${server}/internship/6554367889b517b7ec08e404`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getPublications = async () => {
  try {
    const { data } = await axios.get<Publication[]>(`${server}/publications`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTeachings = async () => {
  try {
    const { data } = await axios.get<TeachingHighlights[]>(
      `${server}/teaching`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAchievements = async () => {
  try {
    const { data } = await axios.get<AchievementType[]>(
      `${server}/achievements`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getProjects = async () => {
  try {
    const { data } = await axios.get<ProjectType[]>(`${server}/projects`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getSpecificProject = async (id: string) => {
  try {
    const { data } = await axios.get<TProject>(`${process.env.NEXT_PUBLIC_NEW_API_URL}/projects/${id}?publications=1`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getSpecificTeaching = async (id: string) => {
  try {
    const { data } = await axios.get<TTeachingDetails>(
      `${server}/teaching/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTeachingIds = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/team`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const homePageUpdates = async () => {
  try {
    const { data } = await axios.get<UpdateAndGoogleScholarStats>(
      `${server}/updates/featured-updates-and-google-scholar-stats`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTeamMembers = async () => {
  try {
    const { data } = await axios.get<TTeamMember[]>(`${server}/team`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
