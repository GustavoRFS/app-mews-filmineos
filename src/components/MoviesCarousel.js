import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MovieCard from './MovieCard';

export default (props) => {
  const [pageWidth, setPageWidth] = useState(Dimensions.get('window').width);

  Dimensions.addEventListener('change', () => {
    setPageWidth(Dimensions.get('window').width);
  });

  const styles = StyleSheet.create({
    item: {
      width: '90%',
      alignSelf: 'center',
      height: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#f1f1f1',
      marginTop: 10,
      marginLeft: 12,
      marginBottom: 10,
    },
    page: {
      width: pageWidth,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    noMovie: {
      color: '#f1f1f1',
      fontSize: 24,
      textAlign: 'center',
    },
  });

  function renderCarousel(array) {
    var pages = [];
    for (var i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        pages.push(
          <View style={styles.page} key={i}>
            <MovieCard
              navigation={props.navigation}
              movie={array[i]}></MovieCard>
            {array[i + 1] ? (
              <MovieCard
                navigation={props.navigation}
                movie={array[i + 1]}></MovieCard>
            ) : undefined}
          </View>,
        );
      }
    }
    return pages;
  }

  return (
    <View style={{display: 'flex'}}>
      <Text style={styles.title}>{props.title}</Text>
      {props.movieList.length > 0 ? (
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {renderCarousel(props.movieList)}
        </ScrollView>
      ) : (
        <View style={{marginVertical: 30}}>
          <Text style={styles.noMovie}>Nenhum filme</Text>
          <Text style={{...styles.noMovie, transform: [{rotate: '90deg'}]}}>
            :c
          </Text>
        </View>
      )}
    </View>
  );
};
