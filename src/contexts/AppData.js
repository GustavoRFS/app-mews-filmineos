import React, { createContext, useEffect, useMemo, useState } from "react";
import { Snackbar } from "react-native-paper";
import api from "../api/api";
import LoadingModal from "../components/LoadingModal";

const AppDataContext = createContext({
  userData: {},
  allMovies: [],
  top10: [],
  bururuTop10: [],
  gururuTop10: [],
  notRated: [],
  refreshData: () => {},
  showMessage: () => {},
  setAllMovies: (newData) => {},
});

export default AppDataContext;

export function AppDataProvider(props) {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackBarVisibility, setSnackBarVisibility] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    profilePic: "https://avatars.githubusercontent.com/u/60088492?v=4",
  });
  const [allMovies, setAllMovies] = useState([
    {
      title: "shrek",
      poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date: "2001-05-16",
      average_rating: 9,
      bururu_rating: 8,
      gururu_rating: 10,
      backdrop_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      overview: "shrek",
    },
  ]);
  const top10 = useMemo(
    () =>
      allMovies
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 10),
    [allMovies]
  );
  const bururuTop10 = useMemo(
    () =>
      allMovies.sort((a, b) => b.bururu_rating - a.bururu_rating).slice(0, 10),
    [allMovies]
  );
  const gururuTop10 = useMemo(
    () =>
      allMovies.sort((a, b) => b.gururu_rating - a.gururu_rating).slice(0, 10),
    [allMovies]
  );
  const notRated = useMemo(
    () => allMovies.filter((movie) => movie.average_rating === 0),
    [allMovies]
  );

  const refreshData = () => {
    return new Promise(async (resolve) => {
      // this.setState({
      //   top10: (await api.get("/movies/average")).data,
      //   allMovies: (await api.get("/movies")).data,
      //   bururuTop10: (await api.get("/movies/bururu")).data,
      //   gururuTop10: (await api.get("/movies/gururu")).data,
      //   notRated: (await api.get("/movies/not_rated")).data,
      //   userData: (await api.get("/auth/user_data")).data,
      // });
      resolve();
    });
  };

  const showMessage = (text) => {
    setMessage(text);
    setSnackBarVisibility(true);
  };

  useEffect(() => {
    refreshData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        userData,
        allMovies,
        top10,
        bururuTop10,
        gururuTop10,
        notRated,
        refreshData,
        showMessage,
        setAllMovies,
      }}
    >
      <Snackbar
        visible={snackBarVisibility}
        onDismiss={() => setSnackBarVisibility(false)}
        duration={2000}
        style={{ backgroundColor: "#3f3f3f" }}
      >
        {message}
      </Snackbar>
      <LoadingModal visible={isLoading} />
      {props.children}
    </AppDataContext.Provider>
  );
}
