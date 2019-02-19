import React from 'react';

const styles = {
  root: {
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 200,
    minHeight: 'calc(100vh - 72px)',
  },

}

export const Clock = props => {
  const {hours, minutes} = props;

  return(
    <div style={styles.root}>
      <span>{hours} : {minutes}</span>
    </div>
  )
}

export default Clock;