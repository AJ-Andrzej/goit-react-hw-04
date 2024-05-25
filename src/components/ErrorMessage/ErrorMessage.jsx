import css from './ErrorMessage.module.css'
export default function ErrorMessage() {
    return (
        <p className={css.error}>Oops! There was an error! Try reloading...</p>
    )
}