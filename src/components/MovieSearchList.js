import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomColor: "#afafaf",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 100,
  },
  image: {
    width: 80,
    height: 120,
    marginLeft: 6,
    alignSelf: "center",
  },
  texts: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  overview: {
    fontSize: 12,
    color: "#fff",
  },
});

export default (props) => {
  const generateMovieList = () => {
    return props.movies.map((movie) => {
      return (
        <View key={movie.id}>
          <Pressable
            style={styles.item}
            onPress={() =>
              props.navigation.navigate("MovieInfo", {
                movie,
                isAddingMovie: true,
              })
            }
          >
            {movie.poster_path ? (
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                }}
              />
            ) : (
              <View style={styles.image}>
                <Text
                  style={{
                    color: "#a1a1a1",
                    fontSize: 16,
                    textAlign: "center",
                    height: "100%",
                    textAlignVertical: "center",
                  }}
                >
                  Sem capa
                </Text>
              </View>
            )}
            <View style={styles.texts}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.overview}>{movie.overview}</Text>
            </View>
          </Pressable>
        </View>
      );
    });
  };

  return <View>{generateMovieList()}</View>;
};
