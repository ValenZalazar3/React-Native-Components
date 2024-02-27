import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {CustomView} from './CustomeView';
import {Title} from './Title';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from './FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000); // para simular una carga de los elementos, a lo que se le deberia hacer un cargador, para mostrar que esta cargando
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface listItemProps {
  number: number;
}

const ListItem = ({number}: listItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{height: 400, width: '100%'}}
    />
  );
};

// <Image
//   source={{uri: `https://picsum.photos/id/${number}/200/300`}}
//   style={{height: 400, width: '100%'}}
// />
