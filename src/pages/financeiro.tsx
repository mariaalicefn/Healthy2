import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButtons, IonAlert, IonMenuButton, IonMenu, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


const perfil = () => {
    location.href = "./perfil"
}
  
  
const home = () => {
    location.href = "./home"
}
  
const principal = () => {
    location.href = "./principal"
}

const carteira = () => {
    location.href = "./carteira"
}
  

const Financeiro: React.FC = () => {
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
                        <IonCardTitle>Janeiro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Fevereiro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Março</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Abril</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Maio</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Junho</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Julho</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Agosto</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Setembro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Outubro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Novembro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Dezembro</IonCardTitle>
                        <IonCardSubtitle>R$ 450,00</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>000000000000000000000000000000000000000</IonCardContent>
                </IonCard>
            
                
                   
            </IonContent>
        </IonPage></>
    );

};

export default Financeiro;