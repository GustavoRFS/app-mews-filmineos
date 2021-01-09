import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TextInput from "../components/TextInput";
import searchMovies from "../api/TMDB/searchMovies";
import Toast from "react-native-simple-toast";
import MovieSearchList from "../components/MovieSearchList";

export default (props) => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const styles = StyleSheet.create({
    searchMovieView: {
      flex: 1,
      backgroundColor: "#1a1a1a",
    },
    textInput: {
      width: "80%",
      alignSelf: "center",
      marginTop: 30,
    },
    buttonView: { width: "30%", alignSelf: "center" },
  });

  const handleMovieSearch = () => {
    searchMovies(movieSearch)
      .then((res) => {
        if (res.data.results && res.data.results.length > 0) {
          const moviesArray = res.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              backdrop_path: movie.backdrop_path,
              overview: movie.overview,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
            };
          });
          console.log(moviesArray);
          setMovies(moviesArray);
        } else {
          Toast.show("Nada encontrado :c");
        }
      })
      .catch((err) => {
        if (movieSearch.trim().length === 0) {
          Toast.show("Escreve antes né ô");
        } else {
          Toast.show("Nada encontrado :c");
        }
        console.log(err);
      });
  };

  return (
    <View style={styles.searchMovieView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={(text) => setMovieSearch(text)}
            placeholder="Nome do filme"
            returnKeyType="search"
            onSubmitEditing={() => {
              handleMovieSearch();
            }}
          />
        </View>
        <View style={{ marginTop: 20, ...styles.buttonView }}>
          <Button
            color="#bf2f2f"
            title="Procurar"
            onPress={() => {
              handleMovieSearch();
            }}
          ></Button>
        </View>
        <MovieSearchList movies={movies} navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};
