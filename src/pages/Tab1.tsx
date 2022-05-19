import { IonContent, IonHeader, IonLabel, IonToggle, IonItem,IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
import React, { useState } from 'react';


const openCapacitorSite = async (url1:string) => {
  await Browser.open({ url: url1 });
};

const currentPosition = async () =>  {
  const coordinates = await Geolocation.getCurrentPosition();

return "https://www.google.com.mx/maps/@"+coordinates.coords.latitude+","+coordinates.coords.longitude;

};

const Tab1: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mapa con tu ubicación actual</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={async e => {setChecked(e.detail.checked); openCapacitorSite(await currentPosition()) }} />
          </IonItem>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
