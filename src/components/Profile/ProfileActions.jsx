import { Link } from "react-router-dom"
import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../constants/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"


const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone')) {
            return
        }
        const [clearError] = await translationClearHistory(user.id)

        if (clearError !== null) {
            //Do something about this!
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <div id="profile-actions">
            <button id="btn-login" onClick={handleLogoutClick}>Logout</button>
            <h4 id="lnk-translations"><Link to="/translations">←Translation</Link></h4>
            <button id="btn-clear-history" onClick={handleClearHistoryClick}>Clear history</button>
        </div>
    )
}
export default ProfileActions