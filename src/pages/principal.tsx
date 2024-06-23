import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButtons, IonAlert, IonMenuButton, IonMenu, IonButton } from '@ionic/react';

import './principal.css'

const filtro = () => {
    location.href = "./filtro"
  }

const perfil = () => {
    location.href = "./perfil"
  }

const carteira = () => {
    location.href = "./carteira"
  }

const financeiro = () => {
    location.href = "./financeiro"
  }

const home = () => {
    location.href = "./home"
  }
const Principal: React.FC = () => {
    return (

        <><IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand='block' color="tertiary" onClick={perfil}>Perfil</IonButton>
                <IonButton expand='block' color="tertiary" onClick={carteira}>Carteira digital</IonButton>
                <IonButton expand='block'color="tertiary" onClick={financeiro}>Financeiro</IonButton>
                <IonButton expand='block' color="tertiary" id='sair' onClick={home}>Sair</IonButton>
                
            </IonContent>
        </IonMenu><IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <img src="/logo_healthy.png" alt="" />
                    <h2>Bem vindo ao seu espaço!</h2>
                    <h3>Do que você precisa?</h3>
                    <div id='buttons'>
                        <IonButton expand='block' id='but' color="tertiary" onClick={filtro}>Rede de atendimento médica</IonButton>
                        <IonButton expand='block' id='but' color="tertiary" onClick={filtro}>Rede de atendimento odontológica</IonButton>
                        <IonButton expand='block' id='but' color="tertiary" onClick={filtro}>Rede de atendimento laboratorial</IonButton>
                    </div>
                </IonContent>
            </IonPage></>

    

        




    );
};

export default Principal;