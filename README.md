![](https://github.com/wniemiec-components-reactnative/selectable-button/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Selectable button</h1>
<p align='center'>Simple selectable button.</p>
<p align="center">
	<a href="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-components-reactnative/selectable-button/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://github.com/wniemiec-components-reactnative/selectable-button/releases"><img src="https://img.shields.io/github/v/release/wniemiec-components-reactnative/selectable-button" alt="Release"></a>
	<a href="https://github.com/wniemiec-components-reactnative/selectable-button/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-components-reactnative/selectable-button" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that allows you to use a clickable button to perform a certain action, in addition to allowing the programmer to choose the button theme according to your preference.

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-components-reactnative/selectable-button/master/docs/img/screens/img1.png" alt="image 1" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-components-reactnative/selectable-button/master/docs/img/screens/img2.png" alt="image 2" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-components-reactnative/selectable-button/master/docs/img/screens/img3.png" alt="image 3" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-components-reactnative/selectable-button/master/docs/img/screens/img4.png" alt="image 4" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-components-reactnative/selectable-button/master/docs/img/screens/img5.png" alt="image 5" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-reactnative/selectable-button
```

2. Import the component
```
import SelectableButton from '@wniemiec-component-reactnative/selectable-button';
```

3. Use it
```
[...]

import React, { useState } from 'react';

[...]

const [isSelected, setIsSelected] = useState(true);

[...]

<SelectableButton
  title="Click me"
  onPress={() => {setIsSelected(!isSelected)}}
  selected={isSelected}
/>
[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|title |`string`|Button label | - |
|onPress |`function(void): void`|Function that is called when the button is pressed| - |
|selected |`bool`|Clicked status | - |
|bgColor |`string`|Background color (in hexadecimal)  |`#01786F`|
|fgColor |`string`|Foreground color (in hexadecimal)  |`#FFFFFF`|
|size |`string`|Button size (`big`, `regular` or `small`)  |`regular`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-components-reactnative/selectable-button/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-components-reactnative/selectable-button/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
