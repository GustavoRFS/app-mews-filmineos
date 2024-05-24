import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Dimensions,
  Button,
  Platform,
} from "react-native";
import RatingModal from "../components/RatingModal";
import RatingStars from "../components/RatingStars";
import AppDataContext from "../contexts/AppData";
import LoadingModal from "../components/LoadingModal";
import toLocaleString from "../utils/toLocaleString";

export default ({ route, navigation }) => {
  const { showMessage, setMovies } = useContext(AppDataContext);
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [imageHeight, setImageHeight] = useState(
    (Dimensions.get("window").width * 9) / 16
  );
  const [buttonEnabled, setButtonState] = useState(true);
  const [isLoading, setLoadingState] = useState(false);

  const movie = route.params.movie;

  const [averageRating, setAverageRating] = useState(movie.average_rating);

  Dimensions.addEventListener("change", () => {
    setImageHeight((Dimensions.get("window").width * 9) / 16);
  });

  const isAddingMovie = !!route.params.isAddingMovie;

  const styles = StyleSheet.create({
    textSection: {
      padding: 16,
    },
    title: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 22,
    },
    subtitles: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
    },
    normalText: {
      color: "#fff",
    },
    image: {
      width: "100%",
      height: Platform.OS === "web" ? 400 : imageHeight,
    },
    noImage: {
      width: "100%",
      height: 240,
    },
    button: {
      marginTop: 20,
      width: 200,
      alignSelf: "center",
    },
    ratingTexts: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const releaseDate = toLocaleString(movie.release_date);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      {movie.backdrop_path ? (
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
        />
      ) : (
        <View style={styles.noImage}>
          <Text
            style={{
              color: "#afafaf",
              fontSize: 30,
              height: "100%",
              textAlign: "center",
              textAlignVertical: "center",
            }}
          >
            Sem Imagem
          </Text>
        </View>
      )}

      <View style={styles.textSection}>
        <Text style={styles.title}>{movie.title}</Text>
        {movie.overview.trim() !== "" ? (
          <Text style={{ marginTop: 10 }}>
            <Text style={styles.subtitles}>Descrição:</Text>
            <Text style={styles.normalText}>{` ${movie.overview}`}</Text>
          </Text>
        ) : (
          <View style={{ marginTop: 10 }}></View>
        )}
        {releaseDate !== "Invalid Date" ? (
          <Text style={{ marginTop: 10 }}>
            <Text style={styles.subtitles}>Data de lançamento: </Text>
            <Text style={styles.normalText}>{releaseDate}</Text>
          </Text>
        ) : null}

        {!isAddingMovie ? (
          <View style={{ marginTop: 10 }}>
            <View style={styles.ratingTexts}>
              <Text style={styles.subtitles}>Avaliação: </Text>
              {averageRating ? (
                <RatingStars
                  width={18}
                  fullWidth={100}
                  ratingValue={averageRating}
                />
              ) : (
                <Text style={{ marginTop: 2, ...styles.normalText }}>
                  Ainda não avaliado
                </Text>
              )}
            </View>
          </View>
        ) : undefined}

        <View style={styles.button}>
          <Button
            disabled={!buttonEnabled}
            color="#bf2f2f"
            title={isAddingMovie ? "Adicionar" : "Avaliar"}
            onPress={() => {
              if (isAddingMovie) {
                setMovies((movies) => [...movies, movie]);

                showMessage("Filme adicionado!");
                navigation.pop();
              } else {
                setModalVisibility(true);
              }
            }}
          ></Button>
        </View>
      </View>
      {!isAddingMovie ? (
        <RatingModal
          initialValue={movie.average_rating}
          visible={modalIsVisible}
          onRequestClose={(newValue) => {
            setModalVisibility(false);
            setAverageRating(newValue);
          }}
          movie={movie}
        />
      ) : (
        <LoadingModal visible={isLoading} />
      )}
    </ScrollView>
  );
};
