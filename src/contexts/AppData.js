import React, { createContext } from "react";
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
  refreshData: undefined,
  showMessage: undefined,
});

export default AppDataContext;

export class AppDataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      snackBarVisibility: false,
      userData: {},
      allMovies: [],
      top10: [],
      bururuTop10: [],
      gururuTop10: [],
      notRated: [],
      refreshData: undefined,
      isLoading: true,
    };
  }

  refreshData = () => {
    return new Promise(async (resolve) => {
      this.setState({
        top10: (await api.get("/movies/average")).data,
        allMovies: (await api.get("/movies")).data,
        bururuTop10: (await api.get("/movies/bururu")).data,
        gururuTop10: (await api.get("/movies/gururu")).data,
        notRated: (await api.get("/movies/not_rated")).data,
        userData: (await api.get("/auth/user_data")).data,
      });
      resolve();
    });
  };

  componentDidMount() {
    this.refreshData().then(() => {
      this.setState({ isLoading: false });
    });
  }

  showMessage = (text) => {
    this.setState({ message: text, snackBarVisibility: true });
  };

  render(props) {
    return (
      <AppDataContext.Provider
        value={{
          userData: this.state.userData,
          allMovies: this.state.allMovies,
          top10: this.state.top10,
          bururuTop10: this.state.bururuTop10,
          gururuTop10: this.state.gururuTop10,
          notRated: this.state.notRated,
          refreshData: this.refreshData,
          showMessage: this.showMessage,
        }}
      >
        <Snackbar
          visible={this.state.snackBarVisibility}
          onDismiss={() => this.setState({ snackBarVisibility: false })}
          duration={2000}
          style={{ backgroundColor: "#3f3f3f" }}
        >
          {this.state.message}
        </Snackbar>
        <LoadingModal visible={this.state.isLoading} />
        {this.props.children}
      </AppDataContext.Provider>
    );
  }
}
