import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import InvisibleButton from './InvisibleButton';

export default (props) => {
  const [infoIsShown, setInfoIsShown] = useState(false);

  const styles = StyleSheet.create({
    card: {
      width: 174,
      height: 261,
      shadowColor: '#4f4f4f',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      backgroundColor: '#1a1a1a',

      marginLeft: 8,
      marginRight: 8,
    },
    image: {
      width: 174,
      height: 261,
    },
    info: {
      flexGrow: 1,
      display: infoIsShown ? 'flex' : 'none',
      backgroundColor: '#000',
      opacity: infoIsShown ? 0.8 : 0,
      alignItems: 'center',
    },
    text: {
      margin: 10,
      color: '#fff',
      flexGrow: 0.7,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    title: {
      margin: 10,
      flexGrow: 0.1,
      color: '#fff',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          setInfoIsShown(!infoIsShown);
        }}>
        <ImageBackground style={styles.image} source={{uri: props.movie.cover}}>
          <View style={styles.info}>
            <Text style={styles.title}>{props.movie.movieName}</Text>
            <Text style={styles.text}>
              Avaliação média: 10{'\n'}ESTRELINHAS
            </Text>
            <InvisibleButton
              onPress={() => {
                console.warn('kk');
              }}
              style={styles.button}
              text="Ver mais"></InvisibleButton>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};
