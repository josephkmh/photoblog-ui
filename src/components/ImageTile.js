import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImageLoaded: false,
    };
  }
  componentDidMount() {
    this.bgImage = new Image();
    if(!this.props.bgImageURL) return;
    this.bgImage.src = this.props.bgImageURL;
    this.bgImage.onload = this.handleImageLoaded.bind(this);
    this.bgImage.onerror = this.handleImageError.bind(this);
  }

  handleImageLoaded() {
    this.setState({ bgImageLoaded: true });
  }

  handleImageError() {
    this.setState({ bgImageLoaded: false });
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.bgImageURL})`,
    };
    if (!this.state.bgImageLoaded) {
      return (
        <div className="imageGrid__image flex flex--rowCenter">
          <div className="flex flex--colCenter">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="svg-animate-spin"><path opacity=".2" d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"/><path fill="#2B2B2B" d="M26.013 10.047l1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z"></path></svg>
          </div>
        </div>
      );
    }
    if (this.props.isAlbumCover) {
      const albumLink = `/albums/${this.props.albumName}`;
      return (
        <Link to={albumLink} className="imageGrid__image" key={this.props.id} style={style}>
          <h3 className="light">{this.props.albumName}</h3>
        </Link>
      );
    }
    return (
      <Link to={`/photo/${this.props.id}`} className="imageGrid__image" key={this.props.id} style={style}>
        <ul>
        </ul>
      </Link>
    );
  }
}

export default ImageTile;
