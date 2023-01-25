import React from 'react'
import { useForm } from 'react-hook-form'

const TranslationsForm = ({ onTranslate }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translationNotes }) => {
      console.log(translationNotes)
      onTranslate(translationNotes)
    }
    
  return (
    <div>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <input type="text" {...register('translationNotes')} placeholder="Hello" />
            <button type="submit"><img src={"submit-button.png"} alt="Translate" width="30" /></button>
        </form>
    </div>
  )
}

export default TranslationsForm