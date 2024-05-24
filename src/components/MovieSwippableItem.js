import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/FontAwesome";
import RatingStars from "./RatingStars";
import { useNavigation } from "@react-navigation/native";
import toLocaleString from "../utils/toLocaleString";

const styles = StyleSheet.create({
  itemSwipeout: {
    backgroundColor: "#1e1e1e",
    borderBottomWidth: 1,
    borderBottomColor: "#afafaf",
  },
  itemView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingVertical: 10,
    flex: 1,
  },
  info: {
    display: "flex",
    marginLeft: 10,
  },
  title: {
    color: "#fafafa",
    fontWeight: "bold",
    fontSize: 16,
  },
  sections: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  subtitle: {
    color: "#fafafa",
    fontWeight: "600",
  },
  normalText: { color: "#fafafa" },
  image: {
    marginLeft: 6,
    width: 80,
    height: 120,
  },
});

export default (props) => {
  const { movie } = props;
  const navigation = useNavigation();

  const isSwipeable = Platform.OS !== "web";

  const Container = Platform.OS === "web" ? Pressable : TouchableNativeFeedback;

  const SwipeableRight = (progress) => {
    return (
      <Container onPress={props.onPress} style={{ height: "100%" }}>
        <Animated.View
          style={[
            {
              justifyContent: "center",
              width: 120,
              height: "100%",
              backgroundColor: "#bf2f2f",
            },
            {
              transform: [
                {
                  translateX: progress?.interpolate?.({
                    inputRange: [0, 1],
                    outputRange: [120, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View
            style={[
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Icon color="#fff" name="trash" size={40} />
          </View>
        </Animated.View>
      </Container>
    );
  };

  const releaseDate = toLocaleString(movie.release_date);

  const ItemContainer = isSwipeable ? Swipeable : View;

  return (
    <ItemContainer
      enabled={isSwipeable}
      renderRightActions={SwipeableRight}
      friction={2.3}
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("MovieInfo", { movie, isAddingMovie: false })
        }
        style={styles.itemView}
      >
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
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          {releaseDate !== "Invalid Date" ? (
            <View style={styles.sections}>
              <Text style={styles.subtitle}>Data de lançamento: </Text>
              <Text style={styles.normalText}>{releaseDate}</Text>
            </View>
          ) : null}
          <View style={styles.sections}>
            <Text style={styles.subtitle}>Avaliação: </Text>
            {movie.average_rating !== undefined ? (
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
      {!isSwipeable && <SwipeableRight />}
    </ItemContainer>
  );
};
