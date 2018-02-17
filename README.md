# VueSwal

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-swal/latest.svg?style=flat-square)](https://npmjs.com/package/vue-swal)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/dt/vue-swal.svg?style=flat-square)](https://npmjs.com/package/vue-swal)
[![donate](https://img.shields.io/badge/donate-%E2%99%A5-ff5f5f.svg)](https://patreon.com/anteriovieira)

<!--
[![CircleCI](https://img.shields.io/circleci/project/github/anteriovieira/vue-swal.svg?style=flat-square)](https://circleci.com/gh/anteriovieira/vue-swal)
[![Codecov](https://img.shields.io/codecov/c/github/anteriovieira/vue-swal.svg?style=flat-square)](https://codecov.io/gh/anteriovieira/vue-swal)
-->

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

|[Basic Example](https://jsfiddle.net/anteriovieira/xkkbfL3L/1800) | [Advanced Example](https://jsfiddle.net/anteriovieira/8nawdjs7) |
|--------|-------------|
|![basic example](https://raw.githubusercontent.com/anteriovieira/vue-swal/master/media/basic-example.gif#1) | ![advanced example](https://raw.githubusercontent.com/anteriovieira/vue-swal/master/media/advanced-example.gif#1)

## Using Nuxt.js

Using the plugin with nuxt is really very simple.

Add file `plugins/vue-swal.js`:

```js
import Vue from 'vue'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)
```

Then, we add the file inside the `plugins` key of `nuxt.config.js`:

```js
module.exports = {
  plugins: ['~/plugins/vue-swal']
}
```

> To learn more about the `plugins` configuration key, check out the [plugins api](/api/configuration-plugins).

The, `vue-swal` will be included in the app bundle, but because it's a library, we want to include it in the vendor bundle for better caching.

We can update our `nuxt.config.js` to add `vue-swal` in the vendor bundle:

```js
module.exports = {
  build: {
    vendor: ['vue-swal']
  },
  plugins: ['~/plugins/vue-swal']
}
```

Click [here](https://github.com/anteriovieira/vue-swal-ssr-app) to see a complete example.

## License

[MIT](http://opensource.org/licenses/MIT)
