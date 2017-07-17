import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/card';

it('should display the Card in a div', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});


// it('Should display the following elements:', () => {
//   it('Should have an span for the card cost', () => {
//     // put the assertion here
//   });
//   it('Should have an img for the card image', () => {
//     // put the assertion here
//   });
//   it('Should have an span for the card description', () => {
//     // put the assertion here
//   });
// });
