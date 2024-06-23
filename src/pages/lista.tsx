import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButtons, IonAlert, IonMenuButton, IonMenu, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


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

const principal = () => {
    location.href = "./principal"
  }

const Lista: React.FC = () => {
    return (
        <><IonMenu contentId="main-content">
        <IonHeader>
            <IonToolbar color="tertiary">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonButton expand='block' color="tertiary" onClick={principal}>Início</IonButton>
            <IonButton expand='block' color="tertiary" onClick={perfil}>Perfil</IonButton>
            <IonButton expand='block' color="tertiary" onClick={carteira}>Carteira digital</IonButton>
            <IonButton expand='block'color="tertiary" onClick={financeiro}>Financeiro</IonButton>
            
            <IonButton expand='block' color="tertiary" id='sair'onClick={home}>Sair</IonButton>
            
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
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Mauricio Soares</IonCardTitle>
                        <IonCardSubtitle>(21)99999-8888</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Rua da xxxxx, n X, Tijuca.</IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage></>
    );

};

export default Lista;