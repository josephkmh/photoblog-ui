import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchAlbum, fetchAlbums, sortImages } from '../actions';

import Header from './Header';
import ImageTile from './ImageTile';

class Album extends Component {
  componentDidMount() {
    if (this.props.match.params.name) {
      this.props.fetchAlbum(this.props.match.params.name);
    } else {
      this.props.fetchAlbums();
    }
  }

  renderAllAlbums() {
    if (this.props.album.error) {
      return (
        <div>No album found! Boo.</div>
      );
    }
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

  renderAlbum() {
    if (this.props.album.error) {
      return (
        <div>No album found! Boo.</div>
      );
    }
    return _.map(this.props.album.photos, (image) => {
      return (
        <ImageTile
          key={image.id}
          id={image.id}
          bgImageURL={image.sizes.small.url}
          />
      );
    });
  }

  render() {
    console.log('rendered!', this.props);
    if (!this.props.match.params.name) {
      return (
        <div>
          <Header />
          <div className="imageGrid">
            {this.renderAllAlbums()}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div>
          <div className="imageGrid__heading">
            <h1>{this.props.album.name}</h1>
            <h4 className="noTopMargin">{this.props.album.size} photos</h4>
          </div>
          <div className="imageGrid">
            {this.renderAlbum()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    album: state.album,
    albums: state.albums,
  };
}

export default connect(mapStateToProps, { fetchAlbum, fetchAlbums, sortImages })(Album);
