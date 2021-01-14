import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import RatingStars from './RatingStars';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  itemSwipeout: {
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#afafaf',
  },
  itemView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  info: {
    display: 'flex',
    marginLeft: 10,
  },
  title: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sections: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  subtitle: {
    color: '#fafafa',
    fontWeight: '600',
  },
  normalText: {color: '#fafafa'},
  image: {
    marginLeft: 6,
    width: 80,
    height: 120,
  },
});

export default (props) => {
  const {movie} = props;
  const navigation = useNavigation();

  const swipeoutBtns = [
    {
      component: (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon color="#fff" name="trash" size={40} />
        </View>
      ),
      backgroundColor: '#c00',
      onPress: () => {
        console.warn(movie.title);
      },
    },
  ];

  const releaseDate = new Date(movie.release_date).toLocaleDateString();
  return (
    <Swipeout style={styles.itemSwipeout} right={swipeoutBtns}>
      <Pressable
        onPress={() =>
          navigation.navigate('MovieInfo', {movie, isAddingMovie: false})
        }
        style={styles.itemView}>
        {movie.poster_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
            }}
            style={styles.image}
          />
        ) : (
          <View style={styles.image}>
            <Text
              style={{
                color: '#a1a1a1',
                fontSize: 16,
                textAlign: 'center',
                height: '100%',
                textAlignVertical: 'center',
              }}>
              Sem capa
            </Text>
          </View>
        )}
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          {releaseDate !== 'Invalid Date' ? (
            <View style={styles.sections}>
              <Text style={styles.subtitle}>Data de lançamento: </Text>
              <Text style={styles.normalText}>{releaseDate}</Text>
            </View>
          ) : null}
          <View style={styles.sections}>
            <Text style={styles.subtitle}>Avaliação Média: </Text>
            {movie.average_rating ? (
              <RatingStars
                width={14}
                fullWidth={80}
                ratingValue={movie.average_rating}
              />
            ) : (
              <Text style={styles.normalText}>Ainda não avaliado</Text>
            )}
          </View>
          <View style={styles.sections}>
            <Text style={styles.subtitle}>Avaliação da Bururu: </Text>
            {movie.average_rating ? (
              <RatingStars
                width={14}
                fullWidth={80}
                ratingValue={movie.average_rating}
              />
            ) : (
              <Text style={styles.normalText}>Ainda não avaliado</Text>
            )}
          </View>
          <View style={styles.sections}>
            <Text style={styles.subtitle}>Avaliação do Gururu: </Text>
            {movie.average_rating ? (
              <RatingStars
                width={14}
                fullWidth={80}
                ratingValue={movie.average_rating}
              />
            ) : (
              <Text style={styles.normalText}>Ainda não avaliado</Text>
            )}
          </View>
        </View>
      </Pressable>
    </Swipeout>
  );
};
