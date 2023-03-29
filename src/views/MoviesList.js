import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import AppDataContext from "../contexts/AppData";
import MoviesCarousel from "../components/MoviesCarousel";

export default (props) => {
  const { top10, notRated } = useContext(AppDataContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#1e1e1e",
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <MoviesCarousel
          navigation={props.navigation}
          title="Mais bem avaliados"
          type="average"
          movieList={top10}
        ></MoviesCarousel>

        <MoviesCarousel
          navigation={props.navigation}
          title="Não avaliados por você"
          type="not rated"
          movieList={notRated}
        ></MoviesCarousel>
      </ScrollView>
    </View>
  );
};
