import React, { useState } from 'react'
import withAuth from '../hoc/withAuth';
import TranslationsForm from '../components/Translations/TranslationsForm';
import { useUser } from "../context/UserContext"
import TranslationSigns from '../components/Translations/TranslationsSigns';
import { translationAdd } from '../api/translation';
import { storageSave } from '../utils/storage';
import { STORAGE_KEY_USER } from '../constants/storageKeys';

const Translations = () => {

  const [ translation, setTranslation ] = useState("Hello");
  const { user, setUser } = useUser();

  const handleTranslateClick = async translation => {
    setTranslation(translation);

    if (!translation) {
      alert("Input a word to translate first");
      return;
    }

    setUser({
      username: user.username,
      translations: [...user.translations, translation]
    })

    const [error, updatedUser] = await translationAdd(user, translation);
    if (error !== null) {
      return
    }
    storageSave(STORAGE_KEY_USER, updatedUser)
    setUser(updatedUser);
  }

  return (
    <>
      <TranslationsForm onTranslate={handleTranslateClick} />
      <TranslationSigns translation={translation} />
    </>
  )
}

export default withAuth(Translations);