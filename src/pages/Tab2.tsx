import { IonContent, IonHeader, IonPage,IonIcon, IonTitle, IonButton, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { star } from 'ionicons/icons';
import { Dialog } from '@capacitor/dialog';

const showConfirm = async () => {
  const { value } = await Dialog.confirm({
    title: 'Confirmar',
    message: `Nos va a pasar con 100 o qué Ivan`,
  });

  console.log('Confirmed:', value);
}; 



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mostrar notificación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton color="success" onClick={() => {showConfirm();}}><IonIcon slot="start" icon={star}  />
      Mostrar alerta</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
