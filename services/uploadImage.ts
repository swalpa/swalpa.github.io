import axios from "axios";

export const imageUpload = async (file: File): Promise<string> => {
    const defaultProfileImage = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
    const formData = new FormData();
    formData.append('file', file);
    try {
        const { data }: { data: string} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return data;
    }
    catch (error) {
        
        console.log(error);
        return defaultProfileImage;
    }
};