import React, { Component } from 'react';
import ColorPicker from './ColorPicker';

export default class App extends Component {
  render() {
    return <ColorPicker colors={['red', 'blue', 'green']} />;
  }
}
