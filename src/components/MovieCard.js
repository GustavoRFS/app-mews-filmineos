import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import InvisibleButton from "./InvisibleButton";
import RatingStars from "./RatingStars";

export default (props) => {
  const [infoIsShown, setInfoIsShown] = useState(false);

  const styles = StyleSheet.create({
    card: {
      width: 174,
      height: 261,
      shadowColor: "#4f4f4f",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      backgroundColor: "#1a1a1a",

      marginLeft: 8,
      marginRight: 8,
    },
    image: {
      width: 174,
      height: 261,
    },
    infoView: {
      flexGrow: 1,
      display: infoIsShown ? "flex" : "none",
      backgroundColor: infoIsShown ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0)",
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 20,
      width: "100%",
    },
    textView: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    text: {
      color: "#fff",
      textAlign: "center",
    },
    button: {
      flexGrow: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    titleView: {
      flexGrow: 1,
      height: "20%",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    title: {
      color: "#fff",
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const switchOpacity = () => {
    infoIsShown ? fadeOut() : fadeIn();
  };

  const fadeIn = () => {
    setInfoIsShown(!infoIsShown);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setInfoIsShown(!infoIsShown);
      }
    });
  };

  var text;
  var rating;

  switch (props.type) {
    case "average":
      text = "Avaliação Média: ";
      rating = props.movie.average_rating;
      break;
    case "gururu":
      text = "Avaliação do Gururu: ";
      rating = props.movie.gururu_rating;
      break;
    case "bururu":
      text = "Avaliação da Bururu: ";
      rating = props.movie.bururu_rating;
      break;
    default:
      text = "Ainda não avaliado";
      rating = undefined;
      break;
  }

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          switchOpacity();
        }}
      >
        <ImageBackground
          style={styles.image}
          source={
            props.movie.poster_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w200${props.movie.poster_path}`,
                }
              : require("../assets/noposter.png")
          }
        >
          <Animated.View style={{ opacity: fadeAnim, ...styles.infoView }}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{props.movie.title}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>
                {text}
                {rating}
              </Text>
              {rating === undefined ? null : (
                <RatingStars fullWidth={110} ratingValue={rating} width={18} />
              )}
            </View>
            <View style={styles.button}>
              <InvisibleButton
                onPress={() => {
                  props.navigation.navigate("MovieInfo", {
                    movie: props.movie,
                    isAddingMovie: false,
                  });
                }}
                style={styles.button}
                text="Ver mais"
              />
            </View>
          </Animated.View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};
