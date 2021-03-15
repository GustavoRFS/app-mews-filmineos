import React, {createContext} from 'react';
import api from '../api/api';

const AppDataContext = createContext({
  userData: {},
  allMovies: [],
  top10: [],
  bururuTop10: [],
  gururuTop10: [],
  notRated: [],
  refreshData: undefined,
});

export default AppDataContext;

export class AppDataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      allMovies: [],
      top10: [],
      bururuTop10: [],
      gururuTop10: [],
      notRated: [],
      refreshData: undefined,
    };
  }

  refreshData = async () => {
    this.setState({
      top10: (await api.get('/movies/average')).data,
      allMovies: (await api.get('/movies')).data,
      bururuTop10: (await api.get('/movies/bururu')).data,
      gururuTop10: (await api.get('/movies/gururu')).data,
      notRated: (await api.get('/movies/not_rated')).data,
      userData: (await api.get('/auth/user_data')).data,
    });
  };

  componentDidMount() {
    this.refreshData();
  }

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
        }}>
        {this.props.children}
      </AppDataContext.Provider>
    );
  }
}
