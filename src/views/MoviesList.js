import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import MoviesCarousel from "../components/MoviesCarousel";

export default () => {
  const bestRating = [
    {
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSukCSx_sj8ubqKht-hKobt2Mr3fx7z5RMdQtnf4felyArIOTnY",
      movieName: "Matrix Reloaded",
      averageRate: 10,
    },
    {
      cover:
        "https://occ-0-3640-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa1bDxLyCrF4C177qMObhYoQ36j2GLSytQu3wzaftklFI76v395qQprpH1pGBF-z5gRcSqaqcVTXniziaLgpbR0jkag.webp?r=c2f",
      movieName: "Matrix Reloaded 2",
      averageRate: 9,
    },
    {
      cover:
        "https://occ-0-3640-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa1bDxLyCrF4C177qMObhYoQ36j2GLSytQu3wzaftklFI76v395qQprpH1pGBF-z5gRcSqaqcVTXniziaLgpbR0jkag.webp?r=c2f",
      movieName: "Matrix Reloaded",
      averageRate: 8,
    },
    {
      cover:
        "https://occ-0-3640-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa1bDxLyCrF4C177qMObhYoQ36j2GLSytQu3wzaftklFI76v395qQprpH1pGBF-z5gRcSqaqcVTXniziaLgpbR0jkag.webp?r=c2f",
      movieName: "Matrix Reloaded",
      averageRate: 7,
    },
    {
      cover:
        "https://occ-0-3640-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa1bDxLyCrF4C177qMObhYoQ36j2GLSytQu3wzaftklFI76v395qQprpH1pGBF-z5gRcSqaqcVTXniziaLgpbR0jkag.webp?r=c2f",
      movieName: "Matrix Reloaded",
      averageRate: 7,
    },
  ];
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}>
      <MoviesCarousel
        title="Mais bem avaliados"
        movieList={bestRating}
      ></MoviesCarousel>
      <MoviesCarousel
        title="Favoritos da Bururu"
        movieList={bestRating}
      ></MoviesCarousel>
      <MoviesCarousel
        title="Favoritos do Gururu"
        movieList={bestRating}
      ></MoviesCarousel>
      <MoviesCarousel
        title="Não avaliados por você"
        movieList={bestRating}
      ></MoviesCarousel>
    </ScrollView>
  );
};
