import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import './Home.css';
import Loading from '../Loading';

import { fetchStream } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchStream();
  }

  renderStream() {
    if (!this.props.stream) return <Loading />;
    return _.map(this.props.stream, (image) => {
      const style = {
        backgroundImage: `url(${image.sizes.small.url})`,
      };
      return (
        <div className="stream__image" key={image.id} style={style}></div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Girlin in Berlin</h1>
        <div className="stream">
          {this.renderStream()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stream: state.stream };
}

export default connect(mapStateToProps, { fetchStream })(Home);

