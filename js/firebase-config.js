const firebaseConfig = {
  apiKey: "AIzaSyBdH-XiLP1C-5Nc044GJv3500ey6dBLaA8",
  authDomain: "vertice-gestao.firebaseapp.com",
  projectId: "vertice-gestao",
  storageBucket: "vertice-gestao.firebasestorage.app",
  messagingSenderId: "901320631312",
  appId: "1:901320631312:web:becd5310e01d026f5b5695"
};

// --- OBRIGATÓRIO: O MOTOR DE ARRANQUE ---
// Sem isso, o site não conecta no banco
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
