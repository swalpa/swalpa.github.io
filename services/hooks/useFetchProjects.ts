import axios from "axios";
import { useEffect, useState } from "react"

const useFetchProjects = () => {
  const [projects, setProjects] = useState<ProjectType[] | false | null>(null);
  useEffect(()=> {
    (async ()=> {
      try {
        const { data } = await axios.get<ProjectType[]>(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        setProjects(data);
      } catch (error) {
        console.log(error);
        setProjects(false);
      }
    })()
  }, [])
  return projects;
}

export default useFetchProjects