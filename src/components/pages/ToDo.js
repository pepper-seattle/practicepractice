import React from 'react';
import '../styles/ToDo.css';
import ListBox from '../ListBox';

const items = [
  {text: 'Be better', checked: false},
  {text: 'Do some stuff', checked: true},
  {text: 'Why me', checked: false}
];



export class ToDo extends React.PureComponent {
  handleChecker = () => {
    console.log('clicked');
  };

  render(){
    return(
      <div className="ToDo-root">
        <div className="ToDo-frame">
          <ListBox onClick={this.handleChecker} items={items} />
        </div>
      </div>
    )
  }
};

export default ToDo;