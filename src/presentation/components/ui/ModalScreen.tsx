import React, {useState} from 'react';
import {Modal, Platform, Text, View} from 'react-native';
import {CustomView} from './CustomeView';
import {Title} from './Title';
import {Button} from './Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" safe />
          </View>
          <View style={{flex: 1}}>
            <Button
              text="Cerrar modal"
              onPress={() => setIsVisible(false)}
              style={{
                height: Platform.OS === 'android' ? 40 : 60,
              }}
            />
          </View>
        </View>
      </Modal>
    </CustomView>
  );
};
