import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../actions';

import Header from './Header';
import Loading from './Loading';
import Footer from './Footer';

class Photo extends Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.id);
  }
  renderPhotoStage() {
    if (!this.props.photo.id ||
        parseInt(this.props.match.params.id, 10) !== parseInt(this.props.photo.id, 10)
    ) {
      return (
        <Loading />
      );
    }
    return (
      <div className="photoStage">
        <div className="photoStage__infoAbove">
          <Link to={`/albums/${this.props.photo.album.name}`} >{this.props.photo.album.name}</Link>
        </div>
        <div className="alignCenter">
          <img className="photoStage__photo" src={this.props.photo.sizes.medium.url} />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Header />
        {this.renderPhotoStage()}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    album: state.album,
    albums: state.albums,
    photo: state.photo,
  };
}

export default connect(mapStateToProps, { fetchPhoto })(Photo);
