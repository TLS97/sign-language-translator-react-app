import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations}) => {
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation}/>)
    return (
        <section>
            <h4>Your translation history</h4>
            {translationList.length === 0 && <p>You have no translations.</p>}
            <ul>
                { translationList.slice(-10) }
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory