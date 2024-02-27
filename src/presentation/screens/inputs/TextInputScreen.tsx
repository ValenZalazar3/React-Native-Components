import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomeView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />
        </Card>
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />
        </Card>
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Phone"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
}; // para IOS va otra cosa que es el KeyboardAvoidingView, en la documentacion esta
