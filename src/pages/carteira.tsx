import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButtons, IonAlert, IonMenuButton, IonMenu, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react';

const perfil = () => {
  location.href = "./perfil"
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

const Carteira: React.FC = () => {
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
            <IonCard>
      <IonCardHeader>
        <img src="/logo_healthy.png" alt="" />
        <IonCardTitle>Carteirinha Healthy</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel>
            <h2>Nome:</h2>
          </IonLabel>
          <IonText>
            <p></p>
          </IonText>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Plano:</h2>
          </IonLabel>
          <IonText>
            <p></p>
          </IonText>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Matrícula:</h2>
          </IonLabel>
          <IonText>
            <p></p>
          </IonText>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Validade:</h2>
          </IonLabel>
          <IonText>
            <p></p>
          </IonText>
        </IonItem>
      </IonCardContent>
    </IonCard>
            </IonContent>
        </IonPage></>
    );

};

export default Carteira;