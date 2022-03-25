// configuração dos meus web app´s firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtyzLFOkzzRfT03sWed0f2c0gCRicUjz8",
  authDomain: "htlm-and-firebase.firebaseapp.com",
  databaseURL: "https://htlm-and-firebase-default-rtdb.firebaseio.com",
  projectId: "htlm-and-firebase",
  storageBucket: "htlm-and-firebase.appspot.com",
  messagingSenderId: "436127163299",
  appId: "1:436127163299:web:b325b2f946ec1e7cbd3016"
};

//iniciando o servidor Firebase
firebase.initializeApp(firebaseConfig);
var firebase = firebase.firestore();


//declarando uma variável para a coleção no banco de dados
const dataBase = firebase.collection("baseDeDados");


//ArrowFunciton para os btn submit
document.addEventListener("click",(e)=>{

//armazenado os valores dos inputs em váriváveis 
let nome = document.getElementById("inpName").value;
let email = document.getElementById("inpEmail").value;
let msg = document.getElementById("inpMsg").value;


// if (nome==""||email==""||msg==""){
// alert("Preencha todos os campos!")
// e.preventDefault();
// }

/*
inserido dados no banco de dados 
  Atributo: valor
*/
dataBase.doc().set({
  name: nome,
  email: email,
  message: msg
})
  
})