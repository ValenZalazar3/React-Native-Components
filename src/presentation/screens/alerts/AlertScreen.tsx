import React from 'react';
import {Alert, Text, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomeView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/propmt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        }, // Algunas cosas funcionan en android, otras no. Lo mismo pasa en IOS, es cuestion de probar. El ondismiss es similar al cancel si nosotros quisieramos que así fuera
      },
    );

  const showPromptNative = () => {
    showPrompt({
      title: 'Valen programador',
      subtitle: 'Vamos por esos objetivos 2024',
      buttons: [
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      placeholder: 'Placeholder',
    });
    // Alert.prompt(
    //   'Correo electronico',
    //   'Mensaje que te deberia salir no se que poner',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // ); Solo sirve para IOS y es el codico nativo.
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" />

      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt - input" onPress={showPromptNative} />
    </CustomView>
  );
};
