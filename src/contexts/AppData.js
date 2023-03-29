import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { Snackbar } from "react-native-paper";
import LoadingModal from "../components/LoadingModal";

const AppDataContext = createContext({
  userData: {},
  allMovies: [],
  top10: [],
  bururuTop10: [],
  gururuTop10: [],
  notRated: [],
  showMessage: () => {},
  setMovies: (movies) => {},
});

export default AppDataContext;

export function AppDataProvider(props) {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackBarVisibility, setSnackBarVisibility] = useState(false);
  const [userData, setUserData] = useState({
    name: "Gustavo",
    profilePic: "https://avatars.githubusercontent.com/u/60088492?v=4",
  });
  const [allMovies, setAllMovies] = useState([]);
  const top10 = useMemo(
    () =>
      allMovies
        .filter((movie) => movie.average_rating !== undefined)
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 10),
    [allMovies]
  );

  const notRated = useMemo(
    () =>
      allMovies.filter(
        (movie) =>
          movie.average_rating === undefined || movie.average_rating === 0
      ),
    [allMovies]
  );

  const setMovies = (callback) => {
    setAllMovies((oldMovies) => {
      const newMovies = callback(oldMovies);

      AsyncStorage.setItem("movies", JSON.stringify(newMovies));

      return newMovies;
    });
  };

  const showMessage = (text) => {
    setMessage(text);
    setSnackBarVisibility(true);
  };

  useEffect(() => {
    const fetchMovies = () => {
      setLoading(true);
      AsyncStorage.getItem("movies")
        .then((movies) => {
          if (movies) {
            setAllMovies(JSON.parse(movies));
          }
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovies();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        userData,
        allMovies,
        top10,
        notRated,
        showMessage,
        setMovies,
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
