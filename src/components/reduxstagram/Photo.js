import React from 'react';
import './styles/Photo.css';
import { Link } from 'react-router-dom';

export class Photo extends React.PureComponent {
  render(){
    const {comments, i, post} = this.props;

    return(
      <figure className="Photo-root">
        <div className="Photo-wrapper">
          <Link to={`/view/${post.code}`}>
            <img className="Photo-image" src={post.display_src} alt={post.caption} />
          </Link>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="Photo-control-buttons">
            <button onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>
            <Link className="Photo-button" to={`/view/${post.code}`}>
              &#10026; {comments[post.code] ? comments[post.code].length : 0 }
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
};

export default Photo;