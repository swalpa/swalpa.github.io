import { useEffect, useState } from "react";
import axios from "axios";

const useFetchTeachingAllDetails = (
  id: string
): TFullTeachingDetails | null | false => {
  const [teachingAllDetails, setTeachingAllDetails] =
    useState<TFullTeachingDetails | null>(null);

  useEffect(() => {
    (async () => {
      setTeachingAllDetails(null);
      if (!id || id === "") return false;
      try {
        const { data } = await axios.get<TFullTeachingDetails>(
          `https://swalpa-backend.onrender.com/teaching/${id}`
        );
        setTeachingAllDetails(data);
      } catch (error) {
        console.log(error);
        return false;
      }
    })();
  }, [id]);

  return teachingAllDetails;
};

export default useFetchTeachingAllDetails;
