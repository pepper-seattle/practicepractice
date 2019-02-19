import React from 'react';

import {Provider} from 'react-redux';
import store from '../../store'

import App from '../reduxstagram/App';
import PhotoGrid from '../reduxstagram/PhotoGrid';

export const Reduxstagram = () => {
  return(
      <div>
        <Provider store={store}>
          <App>
            <PhotoGrid />
          </App>
        </Provider>
      </div>
  )
};

export default Reduxstagram;