import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButton, IonAlert  } from '@ionic/react';
import React, { useState } from 'react';
import './cadastro.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useHistory } from 'react-router-dom';



const Cadastro: React.FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const history = useHistory();

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
    
      const validatePassword = (password: string) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
        return re.test(password);
      };
    
      const Registrar = async () => {
        if (fullName.length < 15 || fullName.length > 60) {
          setErrorMessage('O nome deve conter no mínimo 15 e no máximo 60 caracteres.');
          setShowAlert(true);
          return;
        }
        if (!validateEmail(email)) {
          setErrorMessage('Por favor, entre com um endereço de email válido.');
          setShowAlert(true);
          return;
        }
        if (!validatePassword(password)) {
          setErrorMessage('A senha deve contar 10 caracteres entre letras e números.');
          setShowAlert(true);
          return;
        }
        if (password !== confirmPassword) {
          setErrorMessage('As senhas não conferem.');
          setShowAlert(true);
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log ('user register', user)
          setErrorMessage ('Cadastro realizado com sucesso!')
          setShowAlert (true)
          history.push ('/home');
        } catch (error: any) {
          setErrorMessage('Não foi possível realizar o cadastro');
          setShowAlert(true);
        }
      };


    return (
        <IonContent id='container'>
            <img src="/logo_healthy.png" alt="" />
            <h2 id='h2'>Cadastre-se</h2>
            <div>
            <IonInput label="Nome" labelPlacement="floating" fill="outline" placeholder="Digite seu nome completo" value={fullName} onIonChange={e => setFullName(e.detail.value!)}></IonInput>
            <IonInput label="Email" labelPlacement="floating" fill="outline" placeholder="Digite seu email" id='input' type='email' value={email} onIonChange={e => setEmail(e.detail.value!)}  required></IonInput>
            <IonInput label="Senha" labelPlacement="floating" fill="outline" placeholder="Digite sua senha" id='input' type='password'  value={password} onIonChange={e => setPassword(e.detail.value!)} required></IonInput>
            <IonInput label="Confirmar senha" labelPlacement="floating" fill="outline" placeholder="Digite novamente sua senha" id='input' type='password'  value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} required></IonInput>
            <IonButton color="tertiary" id='button' onClick={Registrar} >Enviar</IonButton>
            <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Atenção'}
            message={errorMessage}
            buttons={['OK']}/>
            </div>
        </IonContent>
    );

};

export default Cadastro;