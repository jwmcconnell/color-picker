import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  colorHandler = color => {
    console.log(color);
  }

  render() {
    const { colors } = this.props;

    const colorElements = colors.map(color => {
      return (
        <button key={color} style={{ backgroundColor: color }} onClick={() => this.colorHandler(color)}>
          {color}
        </button>
      );
    });

    return (
      <section className={styles.ColorPicker}>
        {colorElements}
      </section>
    );
  }
}
