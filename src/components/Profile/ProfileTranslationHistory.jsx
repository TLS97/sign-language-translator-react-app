import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations}) => {
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation}/>)
    return (
        <div className="form profile">
            <h2>Your translation history</h2>
            {translationList.length === 0 && <p>You have no translations.</p>}
            <ul>
                { translationList.slice(-10) }
            </ul>
        </div>
    )
}
export default ProfileTranslationHistory