import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  item: {
    width: '90%',
    alignSelf: 'center',
    height: 10,
    backgroundColor: '#afF',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f1f1f1',
    marginTop: 10,
    marginLeft: 12,
    marginBottom: 10,
  },
  page: {
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default (props) => {
  function renderCarousel(array) {
    var pages = [];
    for (var i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        pages.push(
          <View style={styles.page} key={i}>
            <MovieCard movie={array[i]}></MovieCard>
            {array[i + 1] ? (
              <MovieCard movie={array[i + 1]}></MovieCard>
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
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {renderCarousel(props.movieList)}
      </ScrollView>
    </View>
  );
};
