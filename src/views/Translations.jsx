import React, { useState } from 'react'
import withAuth from '../hoc/withAuth';
import TranslationsForm from '../components/Translations/TranslationsForm';
import { useUser } from "../context/UserContext"
import TranslationSigns from '../components/Translations/TranslationsSigns';

const Translations = () => {

  const [ translation, setTranslation ] = useState("Hello");
  //const [ user, setUser ] = useUser();

  const handleTranslateClick = (translation) => {
    setTranslation(translation);
    //console.log(translation)
    if (!translation) {
      alert("Input a word to translate first");
      return;
    }

  }

  return (
    <>
      <TranslationsForm onTranslate={handleTranslateClick} />
      <TranslationSigns translation={translation} />
    </>
  )
}

export default withAuth(Translations);