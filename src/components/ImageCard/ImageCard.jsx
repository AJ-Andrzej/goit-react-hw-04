import css from './ImageCard.module.css'
export default function ImageCard({onImageClick, image: { urls: { small, description } } }) {

    
    return (
        <div>
            <img
                onClick={onImageClick}
                className={css.card}
                src={small}
                alt={description} />
        </div>
    )
}