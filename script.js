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
// const btnSub = document.getElementById("btnSub");
const btnSub = document.getElementById("btnSub").addEventListener("click", () => {

  //armazenado os valores dos inputs em váriváveis 
  let nome = document.getElementById("inpName")
  let email = document.getElementById("inpEmail");
  let msg = document.getElementById("inpMsg");


  if (nome == "" || email == "" || msg == "") {
    alert("Preencha todos os campos!");
    preventDefault();
  }

  //limitando o número de caracteres da mensagem
  const maxlength = 100;
  if (msg.value.length >= maxlength) {
    alert("A mensagem ter até 100 caracteres");
    preventDefault();
  }
  /*
  inserido dados no banco de dados 
    Atributo: valor
  */
  dataBase.doc().set({
    name: nome.value,
    email: email.value,
    message: msg.value
  })

  /*
  recarregando a página depois de 0,5 segundos
  https://www.positioniseverything.net/javascript-wait-5-seconds
  */
  setTimeout(() => window.location.reload(), 1000);

})

//criando elementos no html para exibir os dados
const completedList = document.querySelector("#all-list");
function addItemDV(doc) {
  //criando os elementos
  let list = document.createElement('li');
  let iddoc = document.createElement('span');
  let name = document.createElement('span');
  let email = document.createElement('span');
  let msg = document.createElement('span');


  iddoc.innerHTML = "ID: " + doc.id + "<br>";
  name.innerHTML = "Nome: " + doc.data().name + '<br>';
  email.innerHTML = "E-mail: " + doc.data().email + '<br>';
  msg.innerHTML = "Mensagem: " + doc.data().message + '<br>';

  list.setAttribute(`data-id`, doc.id);
  list.setAttribute(`class`, "listItens");
  list.appendChild(iddoc);
  list.appendChild(name);
  list.appendChild(email);
  list.appendChild(msg);

  completedList.appendChild(list);
}


const viewData = firebase.collection("baseDeDados").get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    addItemDV(doc);
  });
});

/*
teste contagem de  de caracteres no textArea
const txtArea = document.getElementById("inpMsg");

txtArea.textContent = "123456789";
console.log(txtArea.value.length);
*/

/*
testes de visualização de dados
#1º teste
firebase.collection("baseDeDados").get().then((snapshot) => {
      console.log(snapshot.docs);
  });

#2º teste
const viewData = firebase.collection("baseDeDados").get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(doc.data());
  });
});
*/

