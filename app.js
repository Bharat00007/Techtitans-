
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, Set, ref} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzwtEBgF_kTuAhoi1e9hgt2Q8rlY8e80o",
    authDomain: "techtitans-7b559.firebaseapp.com",
    databaseURL: "https://techtitans-7b559-default-rtdb.firebaseio.com",
    projectId: "techtitans-7b559",
    storageBucket: "techtitans-7b559.appspot.com",
    messagingSenderId: "764084088216",
    appId: "1:764084088216:web:01892ee29faff6c3b18fed",
    measurementId: "G-DF0EKYJVET"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  getAuth = getAuth(app);
  const analytics = getAnalytics(app);


  let FullNameInp = document.getElementById('fullnameInp');
  let EmailInp = document.getElementById('emailInp');
  let PasswordInp = document.getElementById('passwordInp');
  let OrganizationInp = document.getElementById('organizationInp');
  let PanInp =  document.getElementById('panInp');
  let LicenseInp = document.getElementById('licenseInp');

  let signup = evt => {
    evt.preventDefault();
    createUserWithEmailAndPassword(auth, FullNameInp.value, EmailInp.Value, PasswordInp.Value)
    .then((credentials)=>{
        console.log(credentials)


    })
}
 

mainForm.addEventListener('Next', SignupUser)