import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,  IonLabel, IonButton, IonAlert, IonMenu, IonMenuButton, IonButtons, IonList,IonSelect, IonSelectOption, IonText } from '@ionic/react';

import './filtro.css';

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

const lista = () => {
    location.href = "./lista"
  }

const Filtro: React.FC = () => { 

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
                    <img src="/logo_healthy.png" alt="" />
                    <div id='list'>
                        <div id='select'>
                            <IonList>
                                <IonItem>
                                    <IonSelect placeholder="cidade">
                                    <div slot="label">
                                        Selecione sua cidade <IonText color="danger">(Obrigatório)</IonText>
                                    </div>
                                    <IonSelectOption value="apple">Rio de Janeiro</IonSelectOption>
                                    <IonSelectOption value="banana">São Paulo</IonSelectOption>
                                    <IonSelectOption value="orange">Minas Gerais</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </div>
                        <div id='select'>
                        <IonList>
                                <IonItem>
                                    <IonSelect placeholder="bairro">
                                    <div slot="label">
                                        Selecione seu bairro <IonText color="danger">(Obrigatório)</IonText>
                                    </div>
                                    <IonSelectOption value="apple">Bonsucesso</IonSelectOption>
                                    <IonSelectOption value="banana">Ramos</IonSelectOption>
                                    <IonSelectOption value="orange">Olaria</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </div>
                        <div id='select'>
                        <IonList>
                                <IonItem>
                                    <IonSelect placeholder="especialista">
                                    <div slot="label">
                                        Selecione seu especialista <IonText color="danger">(Obrigatório)</IonText>
                                    </div>
                                    <IonSelectOption value="apple">Pediatra</IonSelectOption>
                                    <IonSelectOption value="banana">Cardiologista</IonSelectOption>
                                    <IonSelectOption value="orange">Neurologista</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </div>
                    </div>
                    <IonButton color="tertiary" id='button'onClick={lista}>Enviar</IonButton>
                   
                </IonContent>
            </IonPage></>

    );

};

export default Filtro;