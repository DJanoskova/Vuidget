# Vuidget -  Vue.js embaddable widget
### Supporting Vue-Router and Vuex!

In case you're wondering how to create a full-functioning Vue.js *(routes, actions, state management..)* embeddable widget in HTML, check this repository - the source and the commits.

The result are going to be bundled .js and .css files, that allow you to embed your widget as an HTML component -
`<vue-widget title="TODO list" />`

Of course, if you're using custom fonts or images, those are also going to be generated while you build the source.

**This Vue.js application was created on 22.07.2018 with Vue CLI 3. That means any config I might have is inherited from @vue/cli. Any required dependencies to allow this app to function as an embeddable widget will be listed below.**

* [vue-custom-element](https://github.com/karol-f/vue-custom-element) by karol-f

```
npm install vue-custom-element --save
```
* **Webpack** - we will be using webpack's "LimitChunkCountPlugin" function to prevent app from creating .js chunks for hidden views
```
npm install webpack --save
```

### The command `npm run build` will build your source files for the widget.

...

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

