import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButtons, IonAlert, IonMenuButton, IonMenu, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react';

import "./perfil.css";

const carteira = () => {
    location.href = "./carteira"
  }

const financeiro = () => {
    location.href = "./financeiro"
  }

const home = () => {
    location.href = "./home"
  }

const principal = () => {
    location.href = "./principal"
  }

const Perfil: React.FC = () => {
    return (
        <><IonMenu contentId="main-content">
        <IonHeader>
            <IonToolbar color="tertiary">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonButton expand='block' color="tertiary" onClick={principal}>Início</IonButton>
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
            <IonCard >
                <IonCardHeader>
                    <img src="/logo_healthy.png" alt="" />
                    <IonCardTitle>Maria Alice Feitosa</IonCardTitle>
                    <IonCardSubtitle>Beneficiário</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonLabel >
                        <h2>CPF:</h2>
                    </IonLabel>
                    <IonLabel>
                        <h2>Email:</h2>
                    </IonLabel>
                    <IonLabel>
                        <h2>Celular:</h2>
                    </IonLabel>
                </IonCardContent>
            </IonCard>
                
                
            </IonContent>
        </IonPage></>
    );

};

export default Perfil;