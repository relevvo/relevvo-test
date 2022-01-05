import firebase from '../firebase/clientApp'

export const getProfileData = async (username) => {
  // console.log('getProfileData', { username } )
  const db = firebase.firestore()
  const profileCollection = db.collection('profile')
  const profileDoc = await profileCollection.doc(username).get()

  if (!profileDoc.exists) {
    return null
  }

  return profileDoc.data()
}
