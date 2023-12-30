import axios from "axios";
import { useEffect, useState } from "react"

const useFetchAllProjectDetails = (id: string) => {
  const [project, setProject] = useState<ProjectType | false | null>(null);
  useEffect(()=> {
    (async ()=> {
      try {
        const { data } = await axios.get<ProjectType>(`https://swalpa-backend.onrender.com/projects/${id}`);
        setProject(data);
      } catch (error) {
        console.log(error);
        setProject(false);
      }
    })()
  }, [])
  return project;
}

export default useFetchAllProjectDetails