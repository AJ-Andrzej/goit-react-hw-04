import css from './ImageCard.module.css'
export default function ImageCard({ image: { urls: { small, description } } }) {
    return (
        <div>
            <img
                className={css.card}
                src={small}
                alt={description} />
        </div>
    )
}