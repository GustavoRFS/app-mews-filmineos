import React, { useState, useContext } from "react";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TextInput from "../components/TextInput";
import searchMovies from "../api/TMDB/searchMovies";
import MovieSearchList from "../components/MovieSearchList";
import AppDataContext from "../contexts/AppData";

export default (props) => {
  const { showMessage } = useContext(AppDataContext);
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
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
    setLoadingState(true);
    searchMovies(movieSearch)
      .then((res) => {
        setLoadingState(false);
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
          setMovies(moviesArray);
        } else {
          showMessage("Nada encontrado :c");
        }
      })
      .catch((err) => {
        setLoadingState(false);
        if (movieSearch.trim().length === 0) {
          showMessage("Escreve antes né ô");
        } else {
          showMessage("Nada encontrado :c");
        }
      });
  };

  return (
    <View style={styles.searchMovieView}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={(text) => setMovieSearch(text)}
            placeholder="Nome do filme"
            returnKeyType="search"
            onSubmitEditing={handleMovieSearch}
          />
        </View>
        <View style={{ marginTop: 20, ...styles.buttonView }}>
          <Button
            color="#bf2f2f"
            title="Procurar"
            onPress={handleMovieSearch}
          ></Button>
        </View>
        {isLoading ? (
          <View
            style={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator animating={true} color="#bf2f2f" size="large" />
          </View>
        ) : (
          <MovieSearchList movies={movies} navigation={props.navigation} />
        )}
      </ScrollView>
    </View>
  );
};
