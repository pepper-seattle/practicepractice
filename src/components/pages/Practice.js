import React from 'react';
import Clock from './../Clock';

const styles = {
  root: {
    display: 'flex',
    justifyContents: 'center',
    alignItems: 'center',
  },
};

export class DarylClock extends React.Component {
  constructor(){
    super();
    this.state = {
      hours: '',
      minutes: '',
    };
  }

  componentDidMount() {
    fetch('http://worldclockapi.com/api/jsonp/cet/now')
    .then(results => {
      return results.json();
    }).then(data => {
      let dateTime = data.results.currentDateTime;
      // let reg = new RegExp('^((?:[01]\d|2[0-3]):[0-5]\d)');
      // let time = reg.exec(dateTime);
      console.log(dateTime);
    }).catch(error => {
      console.log('Error: ' + error);
    })
  }

  render(){
    return(
      <div className={styles.root}>
        <Clock hours="05" minutes="30" />
      </div>
    )
  }
};

export default DarylClock;