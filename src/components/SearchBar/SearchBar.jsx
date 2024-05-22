import { Field, Form, Formik } from 'formik';
import css from './SearchBar.module.css'

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (values, actions) => {
        onSubmit(values.query.trim())
        actions.resetForm()
      
        
}

    return (
        <header className={css.header}>
            <Formik
                initialValues={{ query: "" }}
            onSubmit ={handleSubmit}>
                <Form
                className={css.form}
                >
                    
                    <Field
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos">
                        
                </Field>
                <button type="submit">Search</button>

                    
            </Form>
            </Formik>
    </header>
    )
}