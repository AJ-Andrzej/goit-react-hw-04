import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images }) {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} /> 
                </li>
            )
                
            )}
        </ul>
    )

}