import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { userLogin } from "../../api/user"
import { STORAGE_KEY_USER } from "../../constants/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    //Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('/translations')
        }
    }, [user, navigate])

    //Event Handlers
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await userLogin(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }


    //Render Functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>Username is too short(min. 2)</span>
        }
    })()

    return (
        <>
            <div id="login-banner">
                <img src={"Logo.png"} width="200px" />
                <div>
                    <h1>Lost in Translation</h1>
                    <h3>Get started</h3>
                </div>

            </div>
                <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div id="login-input">
                        <img src={"keyboard.png"} width="25px" height="25" />
                        <label>|</label>
                        <input type="text" placeholder="What's your name?" {...register("username", usernameConfig)} />
                        {errorMessage}
                        <button type="submit" disabled={loading}>
                            <img src="submit-button.png" width="40px" />
                        </button>
                    </div>
                    {loading && <p>Logging in...</p>}
                    {apiError && <>{apiError}</>}
                </form>

        </>
    )
}
export default LoginForm