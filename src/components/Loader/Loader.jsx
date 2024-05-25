import { FidgetSpinner } from 'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader(second) {
    return (
        <div className={css.loader}>
            <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            backgroundColor="blue"
            ariaLabel="fidget-spinner-loading"
            wrapperClass="fidget-spinner-wrapper"
        />
        </div>
        )
}