import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Dimensions,
  Button,
} from "react-native";
import RatingModal from "../components/RatingModal";
import RatingStars from "../components/RatingStars";
import AppDataContext from "../contexts/AppData";
import api from "../api/api";
import LoadingModal from "../components/LoadingModal";
import toLocaleString from "../utils/toLocaleString";

export default ({ route, navigation }) => {
  const { refreshData, userData, showMessage } = useContext(AppDataContext);
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [imageHeight, setImageHeight] = useState(
    (Dimensions.get("window").width * 9) / 16
  );
  const [buttonEnabled, setButtonState] = useState(true);
  const [isLoading, setLoadingState] = useState(false);

  Dimensions.addEventListener("change", () => {
    setImageHeight((Dimensions.get("window").width * 9) / 16);
  });

  const movie = route.params.movie;
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
      height: imageHeight,
      resizeMode: "cover",
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
              <Text style={styles.subtitles}>Avaliação média: </Text>
              {movie.average_rating ? (
                <RatingStars
                  width={18}
                  fullWidth={100}
                  ratingValue={movie.average_rating}
                />
              ) : (
                <Text style={{ marginTop: 2, ...styles.normalText }}>
                  Ainda não avaliado
                </Text>
              )}
            </View>
            <View style={styles.ratingTexts}>
              <Text style={styles.subtitles}>Avaliação da Bururu: </Text>
              {movie.bururu_rating ? (
                <RatingStars
                  width={18}
                  fullWidth={100}
                  ratingValue={movie.bururu_rating}
                />
              ) : (
                <Text style={{ marginTop: 2, ...styles.normalText }}>
                  Ainda não avaliado
                </Text>
              )}
            </View>
            <View style={styles.ratingTexts}>
              <Text style={styles.subtitles}>Avaliação do Gururu: </Text>
              {movie.gururu_rating ? (
                <RatingStars
                  width={18}
                  fullWidth={100}
                  ratingValue={movie.gururu_rating}
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
                setButtonState(false);
                api
                  .post("/movies", movie)
                  .then(async () => {
                    setLoadingState(true);
                    await refreshData();
                    setLoadingState(false);
                    showMessage("Filme adicionado!");
                    navigation.pop();
                  })
                  .catch((err) => {
                    if (err.response.data) {
                      showMessage(err.response.data.error);
                    } else {
                      showMessage("Grrr algo deu errado :c");
                    }
                    setButtonState(true);
                    setLoadingState(false);
                  });
              } else {
                setModalVisibility(true);
              }
            }}
          ></Button>
        </View>
      </View>
      {!isAddingMovie ? (
        <RatingModal
          initialValue={
            userData.name === "Bururu"
              ? movie.bururu_rating || 0
              : movie.gururu_rating || 0
          }
          visible={modalIsVisible}
          onRequestClose={() => {
            setModalVisibility(false);
            navigation.pop();
          }}
          movie={movie}
        />
      ) : (
        <LoadingModal visible={isLoading} />
      )}
    </ScrollView>
  );
};
