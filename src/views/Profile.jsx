import React from 'react'
import ProfileActions from '../components/Profile/ProfileActions'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTranslationHistory from '../components/Profile/ProfileTranslationHistory'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'

const Profile = () => {
  const { user } = useUser()

  return (
    <>
      <div>Profile</div>
      <ProfileActions/>
      <ProfileHeader username={user.username} />
      <ProfileTranslationHistory translations={user.translations}/>
    </>
  )
}

export default withAuth(Profile);