import React from 'react';
import './styles/PhotoGrid.css';
import Photo from './Photo';

export class PhotoGrid extends React.Component {
  render(){
    return(
      <div className="PhotoGrid-root">
        {this.props.posts.map((post, i) => 
          <Photo
            i={i}
            key={i}
            post={post}
            {...this.props}
          />
        )}
      </div>
    )
  }
}

export default PhotoGrid;