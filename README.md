# slowreveal

> ✏️ Animate SVG line drawings.

[![NPM Version](http://img.shields.io/npm/v/slowreveal.svg?style=flat)](https://www.npmjs.org/package/slowreveal)

## Install

```bash
$ npm install slowreveal
```

```html
<script
    type="module"
    src="https://unpkg.com/slowreveal@1.2.1/index.js"
></script>
<script type="module">
    import slowreveal from 'https://unpkg.com/slowreveal@1.2.1/index.js';
</script>
```

## Usage

```javascript
import slowreveal from 'slowreveal';

document
    .querySelectorAll("object[type='image/svg+xml']")
    .forEach(svgObject => slowreveal(svgObject, { speed: 20 }));
```
