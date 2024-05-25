import axios from 'axios'

axios.defaults.baseURL = "https://api.unsplash.com/search/photos"

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("", {
        params: {
            query: topic,
            page: currentPage,
            client_id: "p16ARUtdG1Ap--N0GIL5cenjOJ9xzbioT_BuvqU4Gog",
        }
    })
    
    return response.data
    
}

