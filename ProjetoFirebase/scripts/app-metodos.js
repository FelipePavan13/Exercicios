// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB1WSUFOys_2XEvSEncseuMiIdmc2TT_Oo",
    authDomain: "teste-firebase-6e591.firebaseapp.com",
    projectId: "teste-firebase-6e591",
    storageBucket: "teste-firebase-6e591.appspot.com",
    messagingSenderId: "830856975516",
    appId: "1:830856975516:web:cef2b55e7449f2fca30959",
    measurementId: "G-V3Y7C2YMHX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Criação da variável pra acessar o banco de dados
  let db = firebase.firestore();

  //O método collection acessa a coleção criada no Firestore, e o Get recupera os dados de lá através de uma promise
//   db.collection("info").get()
//                         .then((snapshot) => {
//                             //O snapshot é usado pra mostrar os dados para o usuário em forma de array, por isso podemos acessar os dados dentro do banco de dados usando os mesmos métodos de arrays.
//                             snapshot.forEach((info) => {
//                                 let people = info.data();
//                                 console.log(people);
//                             })

//                         })

// Selecionando pessoa específica usando get()
// let specificPerson = db.collection('info').doc('JcPbg3HDjDo57i7zEJvv').get()
//                                                                         .then((person) => {
//                                                                             let specific = person.data();
//                                                                             console.log(specific.nome);
//                                                                         })

// Selecionar uma pessoa específica usando where('campo_a_ser_pesquisado', '== / <= / >= / < / >', 'informação_do_campo')
// db.collection('info').where('nome', '==', 'Felipe').get()
//                                                     .then((snapshot) => {
//                                                         snapshot.forEach((doc) => {
//                                                             let pessoa = doc.data();
//                                                             console.log(pessoa.nome, pessoa.sobrenome);
//                                                         })
//                                                     })

// Adicionar documentos na coleção
// db.collection('info').add({
//     nome: 'Francisco',
//     sobrenome: 'Manente',
//     cidade: 'Sertãozinho',
//     idade: 27
// }).then((newPerson) => {
//     console.log('Pessoa inserida com sucesso!', newPerson.data)
// }).catch((err) => {
//     console.log(err);
// })

/* Outros metódos pra se usar quando selecionamos o documento na coleção:
.set() ---> usado pra alterar id do documento ou algum dado dentro dele (nesse caso, procurar sobre merge = true)
.update() ---> usado pra alterar dados do documento, sem se preocupar com o merge, ou criar novos campos com informações
.FieldValue ---> usado para trocar informações nos campos, como adicionar itens de arrays (arrayUnion), ou incrementar (increment) e reduzir (delete) quantidades 
É importante lembrar que com o delete, podemos excluir campos dos documentos também*/

//Com o método onSnapshot(), assim que dados forem alterados no banco de dados, são atualizados em tempo real. Prestar atenção aqui que esse método não retorna uma promise, portanto não usamos .then()
// db.collection("info").onSnapshot(
//     (snapshot) => {
//         snapshot.forEach((info) => {
//             let people = info.data();
//             console.log(people);
//         })
    
//     }
// )