import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchAlbums } from '../actions';

import Header from './Header';
import ImageTile from './ImageTile';

class AllAlbums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderAllAlbums() {
    return _.map(this.props.albums, (image) => {
      // TODO: refactor API to return new format of image objects (e.g. image.id instead of image.image_id, etc.)
      const isAlbumCover = true;
      return (
        <ImageTile
          key={image.image_id}
          id={image.image_id}
          bgImageURL={image.thumb_url}
          isAlbumCover={isAlbumCover}
          albumName={image.album}
          />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>All Albums</h1>
          <div className="imageGrid">
            {this.renderAllAlbums()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
  };
}

export default connect(mapStateToProps, { fetchAlbums })(AllAlbums);
