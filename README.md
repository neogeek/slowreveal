# slowreveal

> ✏️ Animate SVG line drawings.

[![NPM Version](http://img.shields.io/npm/v/slowreveal.svg?style=flat)](https://www.npmjs.org/package/slowreveal)

## Install

```bash
$ npm install slowreveal
```

```javascript
<script type="module" src="https://unpkg.com/slowreveal@1.0.0/index.js"></script>
<script>
import slowreveal from 'https://unpkg.com/slowreveal@1.0.0/index.js';
</script>
```

## Usage

```javascript
import slowreveal from 'slowreveal';

document
    .querySelectorAll("object[type='image/svg+xml']")
    .forEach(svgObject => slowreveal(svgObject, { speed: 20 }));
```
