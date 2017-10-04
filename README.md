# VueSwal

[![npm](https://img.shields.io/npm/v/vue-swal.svg)](https://www.npmjs.com/package/vue-swal) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

<p align="center">
  <a href="https://www.npmjs.com/package/vue-swal" target="_blank"><img src="https://sweetalert.js.org/assets/images/modal-examples.png"></a>
  [Api sweetalert](https://sweetalert.js.org/guides/#getting-started) or [Live demo](https://jsfiddle.net/anteriovieira/xkkbfL3L/1800/)
</p>

## Installation

```bash
npm install --save vue-swal
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)
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

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-swal/dist/vue-swal.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-swal"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
