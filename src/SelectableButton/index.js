/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

/**
 * Simple selectable button.
 * 
 * @param   {string} title Button label
 * @param   {function(void): void} onPress Function that is called when the 
 *          button is pressed
 * @param   {bool} selected Clicked status
 * @param   {string} [bgColor='#01786F'] Background color (in hexadecimal) 
 * @param   {string} [fgColor='#FFFFFF'] Foreground color (in hexadecimal)
 * @param   {string} [size='regular'] Button size
 * @param   {boolean} [full=false] Indicates whether the width should be 100%
 */
export default function SelectableButton({
  title, 
  onPress, 
  selected, 
  bgColor='#01786F', 
  fgColor='#FFFFFF', 
  size='regular', 
  full=false 
}) {

  const factor = buildFactor(size);

  return (
    <TouchableOpacity 
      style={buildButtonStyle(factor, bgColor, fgColor, selected, full)} 
      onPress={onPress}
    >
      <Text style={buildButtonTextStyle(factor, fgColor)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function buildFactor(size) {
  const normalizedSize = normalizeSize(size);
  let factor = 1.3;

  if (normalizedSize === 'small')
    factor = 1.0;
  else if (normalizedSize === 'big')
    factor = 2.0;

  return factor;
}

function normalizeSize(size) {
  return size.toLowerCase().trim();
}

function buildButtonStyle(factor, bgColor, fgColor, selected, full) {
  const btnStyle = [
    styles.btnArea,
    {minWidth: styles.btnArea.minWidth * factor},
    {height: styles.btnArea.height * factor},
    buildNoSelectedStyle(bgColor),
    buildSelectedStyle(bgColor, fgColor, selected)
  ];
  
  if (full)
    btnStyle.push({width: '100%'});

  return btnStyle;
}

function buildNoSelectedStyle(bgColor) {
  return {
    backgroundColor: bgColor, 
    opacity: 0.6 
  };
}

function buildSelectedStyle(bgColor, fgColor, selected) {
  if (!selected)
    return null;

  return {
    backgroundColor: bgColor,
    color: fgColor,
    opacity: 1
  };
}

function buildButtonTextStyle(factor, fgColor) {
  return [
    { fontSize: styles.btnTitle.fontSize * factor }, 
    { color: fgColor }
  ];
}
