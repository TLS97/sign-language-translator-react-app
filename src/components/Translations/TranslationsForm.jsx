import React from 'react'
import { useForm } from 'react-hook-form'

const TranslationsForm = ({ onTranslate }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translationNotes }) => {
      translationNotes = translationNotes.replace(/[^a-zA-Z]/g, "")
      onTranslate(translationNotes)}
    
  return (
    <div>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <input type="text" {...register('translationNotes')} placeholder="Hello" maxLength="40" />
            <button type="submit"><img src={"submit-button.png"} alt="Translate" width="30" /></button>
        </form>
    </div>
  )
}

export default TranslationsForm