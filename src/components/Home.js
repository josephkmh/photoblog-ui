import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Header from './Header';
import Loading from './Loading';
import ImageTile from './ImageTile';

import { fetchStream, sortImages } from './../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImageLoaded: false,
    };
  }
  componentDidMount() {
    this.props.fetchStream();
  }

  renderStream() {
    if (!this.props.stream) return <Loading />;
    return _.map(this.props.stream, (image) => {
      return (
        <ImageTile
          key={image.id}
          id={image.id}
          bgImageURL={image.sizes.small.url}
          albumName={image.album.name}
          />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="imageGrid">
          {this.renderStream()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stream: state.stream };
}

export default connect(mapStateToProps, { fetchStream, sortImages })(Home);

