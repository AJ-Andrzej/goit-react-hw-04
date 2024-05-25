import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import {getImages} from '../images-api'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'

export default function App() {
    const [images, setImages] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [maxPages, setMaxPages] = useState(0);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImgClick = (img) => {
        setCurrentImage(img)
        setisModalOpen(true)
    }

    const onCloseModal = ()=>{
        setisModalOpen(false)
        setCurrentImage(null)
    }

    const handleSearch = (topic) => {
                
        setSearchQuery(topic)
        setPage(1)
        setImages([])
    }

    const handleLoadMore = () => {
        setPage(page + 1)
    }
    
    useEffect(() => {
        if (searchQuery.trim() === "") return

        async function fethImages() {
            try {
                setIsError(false)
                setIsLoading(true)
                const data = await getImages(searchQuery, page)
                setImages((prevImages) => [...prevImages, ...data.results])
                setMaxPages(data.total_pages)
            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fethImages()

    },[searchQuery, page])
    
    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            {images.length > 0 && <ImageGallery images={images} onImageClick={handleImgClick} />}
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
            {images.length > 0 && !isLoading && maxPages >= page && <LoadMoreBtn onClick={handleLoadMore} />}
            <ImageModal
                isModalOpen={isModalOpen}
                image={currentImage}
                onCloseModal={onCloseModal} />
       </>
        
    )
}
