## Install
```sh
$ npm i -g auto-require-files
```

## Use

#### If `src/images` have some images:

```sh
$ auto-require-files src/images
```

#### Ok, create `src/images/index.js` files now, look like this:

```js
/* eslint-disable global-require */
export default {
  ic_tab_aboutus: require('./ic_tab_aboutus.png'),
  ic_tab_aboutus_selected: require('./ic_tab_aboutus_selected.png'),
  ic_tab_account: require('./ic_tab_account.png'),
  ic_tab_account_selected: require('./ic_tab_account_selected.png'),
  ic_tab_home: require('./ic_tab_home.png'),
  ic_tab_menu: require('./ic_tab_menu.png'),
  ic_tab_menu_selected: require('./ic_tab_menu_selected.png'),
  ic_tab_news_selected: require('./ic_tab_news_selected.png'),
};
/* eslint-enable global-require */
```

## Files details

Auto load `.png, .jpg, .jpge, .gif, .svg, .js, .jsx` files;
and ignore `index.js, index.jsx` files.

## Licenes

```
MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
