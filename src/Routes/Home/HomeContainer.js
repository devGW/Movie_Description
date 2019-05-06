import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null,
    loading: true
  };
  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;