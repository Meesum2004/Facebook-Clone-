// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getDatabase,
    ref,
    onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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


var feedParent = document.getElementById("feedParent");

var feedData = [];

function renderPost() {
    for (let i = 0; i < feedData.length; i++) {

        var obj = feedData[i];

        feedParent.innerHTML += `   <div class = "mb-3 bg-white rounded shadow">
                    <div class="p-3 d-flex align-items-center">
                        <img src="${obj.userUrl}" width="50px" class="rounded-pill" alt="">
                        <div class = "p-2">
                            <h3 class = "mb-0" >${obj.userName}</h3>
                            <p class = "mb-0">Just Now</p>
                        </div>
                    </div>
                    <div class="p-3">
                    <p>${obj.description}</p>
                     </div>
                    <img src="${obj.imageUrl}" width="100%" alt="">
                    <div class="p-3 d-flex">
                        <button class = "w-50 btn btn-light">Like</button>
                        <button class = "w-50 btn btn-light">Comment</button>
                    </div>
                </div>`
        
    }
}

function getFeed() {
    var reference = ref(db, 'post')
    onValue(reference, function (apnaData) {
        console.log(apnaData.val());

        feedData = Object.values(apnaData.val())
        renderPost()
    })
}
getFeed();