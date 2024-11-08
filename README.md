# pendingliteral.js

_A ridiculously small layer for using promises in template literals_

[![NPM Version](https://img.shields.io/npm/v/@enzoaicardi/pendingliteral.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/pendingliteral)
[![NPM Downloads](https://img.shields.io/npm/dm/@enzoaicardi/pendingliteral.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/pendingliteral)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@enzoaicardi/pendingliteral?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/pendingliteral)
[![JSDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/@enzoaicardi/pendingliteral?style=for-the-badge)](https://www.jsdelivr.com/package/npm/@enzoaicardi/pendingliteral)
[![Wiki](https://img.shields.io/badge/Wiki-Documentation-blue?style=for-the-badge)](https://github.com/enzoaicardi/pendingliteral/tree/main/wiki/README.md)

# List of all exports

-   [x] pendingLiteral
-   [x] pendingJoin

# Usage

**pendingLiteral** can be useful when you need to wait for one or more promises to be resolved before building a string with template literals.

```js
import { pendingLiteral as html } from "pendingliteral";

class MyCustomElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // request a post from jsonplaceholder API
        const post = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
            (response) => response.json()
        );
        // create the pendingLiteral
        const content = html`<div>Post: ${post.then((p) => p.title)}</div>`;
        // update the component's content
        content.then((html) => (this.innerHTML = content));
    }
}
```

**pendingJoin** can be useful if you need to attach a table that can contain promises in a pendingLiteral for example.

```js
import { pendingLiteral, pendingJoin as join } from "pendingliteral";

const string = pendingLiteral`
    some promises resolved:
    ${join(
        [
            Promise.resolve().then(() => "[first promise]"),
            Promise.resolve().then(() => "[second promise]"),
            Promise.resolve().then(() => "[third promise]"),
        ],
        " - " /* second argument is optional */
    )}
`;

string.then((str) => console.log(str));
```

# Installations

The pendingliteral layer is available as **ESModule / IIFE / Commonjs**.

## NPM Package

```bash
npm install @enzoaicardi/pendingliteral
```

```js
import { pendingLiteral, pendingJoin } from "@enzoaicardi/pendingliteral"; // es modules
const { pendingLiteral, pendingJoin } = require("@enzoaicardi/pendingliteral"); // commonjs modules
```

## CDN import

```js
// es modules
import {
    pendingLiteral,
    pendingJoin,
} from "https://cdn.jsdelivr.net/npm/@enzoaicardi/pendingliteral@latest/esm/pendingliteral.js";
```

```html
<!-- iife function execution -->
<script src="https://cdn.jsdelivr.net/npm/@enzoaicardi/pendingliteral@latest/iife/pendingliteral.js"></script>
<script>
    // global object destructuration
    const { pendingLiteral, pendingJoin } = pendingliteral;
</script>
```
