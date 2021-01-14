import React, {useState} from 'react';
import {Text, StyleSheet, View, ImageBackground, Pressable} from 'react-native';
import InvisibleButton from './InvisibleButton';
import RatingStars from './RatingStars';

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
    infoView: {
      flexGrow: 1,
      display: infoIsShown ? 'flex' : 'none',
      backgroundColor: infoIsShown ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
      opacity: infoIsShown ? 1 : 0,
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 20,
      width: '100%',
    },
    textView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    text: {
      color: '#fff',
      textAlign: 'center',
    },
    button: {
      flexGrow: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    titleView: {
      flexGrow: 1,
      height: '20%',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title: {
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
        <ImageBackground
          style={styles.image}
          source={
            props.movie.poster_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w200${props.movie.poster_path}`,
                }
              : require('../assets/noposter.png')
          }>
          <View style={styles.infoView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{props.movie.title}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>
                Avaliação média: {props.movie.average_rating}
              </Text>
              <RatingStars
                fullWidth={110}
                ratingValue={props.movie.average_rating}
                width={18}
              />
            </View>
            <View style={styles.button}>
              <InvisibleButton
                onPress={() => {
                  console.log(props.movie);
                  props.navigation.navigate('MovieInfo', {
                    movie: props.movie,
                    isAddingMovie: false,
                  });
                }}
                style={styles.button}
                text="Ver mais"
              />
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};
