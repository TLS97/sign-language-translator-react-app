import React from 'react'
import TranslationsSign from './TranslationsSign'

const TranslationsSigns = ({translation}) => {

  // console.log(translation)
  const translationCharactersList = translation.split("");
  //console.log(translationCharactersList)
    const translationList = translationCharactersList.map(
        (character, index) => <TranslationsSign key={ index + "-" + character } image={`individial_signs/${character}.png`} name={character} />)

  return (
    <section className="form signs">
        { translationList.length === 0 && <p>You have no translations yet.</p>}
        <ul className="translation list">
            { translationList }
        </ul>
    </section>
  )
}

export default TranslationsSigns;