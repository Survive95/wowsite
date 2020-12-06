import app from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAHHukH9qeE63gF3wVu0YmX-RR89eGBZ3E",
    authDomain: "todoowow-92939.firebaseapp.com",
    databaseURL: "https://todoowow-92939.firebaseio.com",
    projectId: "todoowow-92939",
    storageBucket: "todoowow-92939.appspot.com",
    messagingSenderId: "86511986114",
    appId: "1:86511986114:web:8b8c0034ec526d626ce25b"
};

class Firebase {
    constructor(){
        app.initializeApp(config)
        this.db = app.firestore()
    }

    links = uid => this.db.doc(`links/${uid}`)

}

export default Firebase