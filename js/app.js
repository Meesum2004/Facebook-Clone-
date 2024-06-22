 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 import { getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAi67bIuOOIRd7YoDVbj1ttyFykv_0Ln2A",
   authDomain: "meesum-facebook.firebaseapp.com",
   databaseURL: "https://meesum-facebook-default-rtdb.firebaseio.com",
   projectId: "meesum-facebook",
   storageBucket: "meesum-facebook.appspot.com",
   messagingSenderId: "322027311397",
   appId: "1:322027311397:web:eeb52c0aafeea20e1a8acc",
   measurementId: "G-9CJ48QJSTY"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()




var userName = document.getElementById("userName");
var userUrl = document.getElementById("userUrl");
var imageUrl = document.getElementById("imageUrl");
var description = document.getElementById("description");

window.createPost = function () {
  var obj = {
    userName : userName.value,
    userUrl : userUrl.value,
    imageUrl : imageUrl.value,
    description : description.value,
  }
  console.log(obj);


  var reference = ref(db, 'post')
  push(reference, obj).then(function(res) {
    console.log("Data is Send sucessFully");
  }).catch(function (err){
    console.log(err,"Error");
  })


}
