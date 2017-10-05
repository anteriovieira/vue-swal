# VueSwal

[![npm](https://img.shields.io/npm/v/vue-swal.svg)](https://www.npmjs.com/package/vue-swal) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> You can customize VueSwal to fit your needs.

<p align="center">
  <a href="https://www.npmjs.com/package/vue-swal" target="_blank"><img src="https://sweetalert.js.org/assets/images/modal-examples.png"></a>
</p>

<p align="center">
  <a href="https://sweetalert.js.org/guides/#getting-started" target="_blank">Api sweetalert</a> or 
  <a href="#examples" target="_blank">Examples</a>
</p>

## Installation

### npm

```bash
npm install vue-swal
```

### yarn

```bash
yarn add vue-swal
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-swal/dist/vue-swal.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-swal"></script>
```

### Simply happens

```js
export default {
  methods: {
    alert() {
      this.$swal('Hello word!')
    }
  }
}
```

## Examples


### Basic Example

<p align="center">
  <a href="https://jsfiddle.net/anteriovieira/xkkbfL3L/1800/" target="_blank">Live demo</a>
</p>

<p align="center">
  <a href="https://jsfiddle.net/anteriovieira/xkkbfL3L/1800/" target="_blank">
    <img style="width: 50%" src="https://raw.githubusercontent.com/anteriovieira/vue-swal/master/media/basic-example.png#1">
  </a>
</p>

### Advanced Example

<p align="center">
  <a href="https://jsfiddle.net/anteriovieira/xkkbfL3L/1801/" target="_blank">Live demo</a>
</p>

<p align="center">
  <a href="https://jsfiddle.net/anteriovieira/xkkbfL3L/1801/" target="_blank">
    <img style="width: 50%" src="https://raw.githubusercontent.com/anteriovieira/vue-swal/master/media/advanced-example.png#1">
  </a>
</p>

## License

[MIT](http://opensource.org/licenses/MIT)
