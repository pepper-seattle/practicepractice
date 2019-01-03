import React from 'react';

export const styles = {
  title: {
    color: '#ff0000',
  }
};

export const Error = () => {
  return(
    <div>
      <h1 style ={styles.title}>ERROR</h1>

      <div>
        <p>Path entered does not exist! Go home and try again!</p>
      </div>
    </div>
  )
};

export default Error;