import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src="https://jooinn.com/images/man-19.jpg"
                alt="man"
                name="Scott"
                min
      />
        <img src={this.props.src} alt={this.props.alt}/>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
          "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
          коллекцию размеров и форм шрифтов,
        </div>
      </div>
    )
  }
}