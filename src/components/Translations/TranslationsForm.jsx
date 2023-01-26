import React from 'react'
import { useForm } from 'react-hook-form'

const TranslationsForm = ({ onTranslate }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translationNotes }) => {
      translationNotes = translationNotes.replace(/[^a-zA-Z]/g, "")
      onTranslate(translationNotes)}
    
  return (
    <div className="translation banner">
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className="input translation">
            <img src={"keyboard.png"} alt="" width="25" height="25"/>
            <label>|</label>
            <input  type="text" {...register('translationNotes')} placeholder="Hello" maxLength="40" />
            <button type="submit"><img src={"submit-button.png"} alt="Translate" width="40" /></button>
          </div>
        </form>
    </div>
  )
}

export default TranslationsForm