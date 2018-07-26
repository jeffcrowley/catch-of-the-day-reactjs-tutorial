import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8t8bZq5YDUuaUwoXsoQcFNsdXJ1jc40A",
    authDomain: "catch-of-the-day-jeff-crowley.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jeff-crowley.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export { firebaseApp }

// this is a default export

export default base


