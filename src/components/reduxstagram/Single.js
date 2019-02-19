import React from 'react';
import { Link } from 'react-router-dom';

import Photo from './Photo';

export class Single extends React.PureComponent {
  render(){
    // const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    return(
      <div>
        <Photo />
        <Link to='/projects/reduxstagram/'>Home</Link>
      </div>
    )
  }
}

export default Single;