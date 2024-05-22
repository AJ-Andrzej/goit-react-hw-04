import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import {getImages} from '../images-api'

export default function App() {
    const [images, setImages] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1);

    const handleSearch = (topic) => {
        
        
        setSearchQuery(topic)
        setPage(1)
        setImages([])
    }
    
    useEffect(() => {
        if (searchQuery.trim() === "") return

        async function fethImages() {
            try {
                const data = await getImages(searchQuery, page)
                setImages(data)
            } catch (err) {
                console.log(err);
            }
        }

        fethImages()

    },[searchQuery, page])
    
    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            <ImageGallery images={images} />
       </>
        
    )
}
