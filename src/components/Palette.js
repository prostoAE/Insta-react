import React, {Component} from 'react';
import InstaService from '../services/InstaService';
import ErrorMessage from './Error';

export default class Palette extends Component {
  InstaService = new InstaService();
  state = {
    error: false,
    photos: []
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true
    })
  };

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos
    })
  };

  renderItems = (arr) => {
    return arr.map(item => {
      const {src, alt, id} = item;

      return (
        <img key={id} src={src} alt={alt}/>
      )
    })
  };

  render() {
    const {error, photos} = this.state;

    if (error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(photos);

    return (
      <div className="palette">
        {items}
      </div>
    )

  }
}