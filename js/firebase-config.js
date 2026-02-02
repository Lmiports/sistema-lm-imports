// --- CONFIGURAÇÃO CLÁSSICA (COMPAT) ---
// Não use 'import' e nem 'const app ='

const firebaseConfig = {
  apiKey: "AIzaSyBdh-XiLP1C-5Nc044GJv3500ey6dBLaA8",
  authDomain: "vertice-gestao.firebaseapp.com",
  projectId: "vertice-gestao",
  storageBucket: "vertice-gestao.appspot.com",
  messagingSenderId: "901320631312",
  appId: "1:901320631312:web:becd5310e01d026f5b5695"
};

// INICIALIZA O FIREBASE NO MODO GLOBAL
// (Isso é o que faz o seu index.html funcionar)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
