import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;
DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
