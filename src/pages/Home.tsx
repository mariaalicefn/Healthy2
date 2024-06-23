import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButton, IonAlert } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useHistory } from 'react-router-dom';


const cadastro = () => {
  location.href = "./cadastro"
}



const Home: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();

  const Enviar = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      history.push('/principal')
      console.log('User logged in:', user);
      
    } catch (error: any) {
      setErrorMessage ('Login ou senha inválidos');
      setShowAlert (true);
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen id='container1'>
        
      <img src="/logo_healthy.png" alt="" />
      <h2>Conecte-se</h2>
      <div>
        <IonInput label="Email" labelPlacement="floating" fill="outline" placeholder="Digite seu email" id='input' type='email' value={email} onIonChange={e => setEmail(e.detail.value!)} required></IonInput>
        <IonInput label="Senha" labelPlacement="floating" fill="outline" placeholder="Digite sua senha" id='input' type='password' value={password} onIonChange={e => setPassword(e.detail.value!)} required></IonInput>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'ATENÇÃO'}
          message={errorMessage}
          buttons={['OK']}
        />
      </div>
      <IonButton color="tertiary" id='button' onClick={Enviar}>Enviar</IonButton>
      <div id='container2'>
        <IonButton fill="outline" color="tertiary" onClick={cadastro}> Cadastro</IonButton>
        <IonButton fill="outline" color="tertiary"> Esqueci a senha</IonButton>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default Home;
