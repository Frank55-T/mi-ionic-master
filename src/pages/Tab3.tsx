import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel} from '@ionic/react';
import { IonButton, IonList, IonIcon,IonSelect, IonSelectOption,IonListHeader,IonItemDivider,useIonToast  } from '@ionic/react';
import { star } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { Share } from '@capacitor/share';
import './Tab3.css';
import { Clipboard } from '@capacitor/clipboard';

 
  const compartir = async (urll:string) => {
    const compa = await Share.share({
      title: 'Comparte tus datos a un nuevo',
      text: 'Really awesome thing you need to see right meow',
      url: urll,
      dialogTitle: 'Share with buddies',
    });}

    const writeToClipboard = async (texto:string) => {
      await Clipboard.write({
        string: texto
      });
    };

const Tab3: React.FC = () => {
  const [present, dismiss] = useIonToast();
  const [text, setText] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [hairColor, setHairColor] = useState<string>('brown');
  const [number, setNumber] = useState<number>();
  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Datos personales post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonItem>
           <IonInput value={text} type="text" placeholder="Escribe tu nombre" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
          <IonInput value={text2} type="text" placeholder="Escribe tus apellidos" onIonChange={i => setText2(i.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Escribe tu número teléfonico" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          
    <IonList>
          <IonListHeader>
            <IonLabel>
              Elige tu género y tu color de pelo
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Hair Color</IonLabel>
            <IonSelect value={hairColor} okText="Okay" cancelText="Dismiss" onIonChange={e => setHairColor(e.detail.value)}>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Gender: {gender ?? '(none selected)'}</IonItem>
          <IonItem>Hair Color: {hairColor}</IonItem>
        </IonList>
        <IonButton color="danger" onClick={() => {present('Envie sus datos a quien quiera', 3000); compartir("https://miweb.com/api/peticiones:enviar?nombre="+"%27+"+text+"%27&"+"apellidos="+"%27"+text2+"%27&numero="+"%27"+number+"%27"+"&genero="+"%27"+gender+"%27"+"&colorpelo="+"%27"+hairColor+"%27",);writeToClipboard("https://miweb.com/api/peticiones:enviar?nombre="+"%27+"+text+"%27&"+"apellidos="+"%27"+text2+"%27&numero="+"%27"+number+"%27"+"&genero="+"%27"+gender+"%27"+"&colorpelo="+"%27"+hairColor+"%27")}}><IonIcon slot="start" icon={star}  />
      Enviar datos</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        
      </IonContent>
      
    </IonPage>
  );
};

export default Tab3;