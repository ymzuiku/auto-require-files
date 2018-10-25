## Install
```sh
$ npm i -g auto-require-files
```

## Use

If src/images have some images,

```sh
$ auto-require-files src/images
```

Done, create src/images/index.js files, look like this:

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

Auto load `'.png', '.jpg', '.jpge', '.gif', '.svg', '.js', '.jsx'` files;
and ignore `index.js, index.jsx`.
