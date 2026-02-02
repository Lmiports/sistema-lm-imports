// Configuração do seu Firebase (Baseada na sua imagem image_40ac4c.png)
const firebaseConfig = {
  apiKey: "AIzaSyBdH-XiLP1C-5Nc044GJv3500ey6dBLaA8",
  authDomain: "vertice-gestao.firebaseapp.com",
  projectId: "vertice-gestao",
  storageBucket: "vertice-gestao.appspot.com",
  messagingSenderId: "901320631312",
  appId: "1:901320631312:web:becd5310e01d026f5b5695"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Define a variável global db que o sistema usa
const db = firebase.firestore();
