# Vuidget -  Vue.js embeddable widget
### Supporting Vue-Router and Vuex!

![alt text](https://github.com/DJanoskova/Vuidget/blob/master/src/assets/img/logo.png)

## **[Vuidget — How to create an embeddable Vue.js widget with vue-custom-element](https://medium.com/@info_53938/vuidget-how-to-create-an-embeddable-vue-js-widget-with-vue-custom-element-674bdcb96b97)** @ Medium

In case you're wondering how to create a full-functioning Vue.js *(routes, actions, state management..)* embeddable widget in HTML, check this repository - the source and the commits.

The result are going to be bundled files (only one app.js and app.css file, no chunks), that allow you to embed your widget as an HTML component -

`<vue-widget title="TODO list"></vue-widget>`

Of course, if you're using custom fonts or images, those are also going to be generated while you build the source.

**Source of the working demo** is located in `example.html` in the root folder and also live at
http://vuidget.danajanoskova.sk/

> Contents of the `dist` build folder were uploaded to http://vuidget-source.danajanoskova.sk/ and embedded in the demo application. It's necessary to upload your generated files somewhere accessible in order to include them as a widget. Don't forget the .htaccess file to allow various origins to access your widget files, like fonts or images.

> `Header add Access-Control-Allow-Origin "*" `

...

**This Vue.js application was created on 22.07.2018 with Vue CLI 3. That means any config I might have is inherited from @vue/cli. Any required dependencies to allow this app to function as an embeddable widget will be listed below.**

* **[vue-custom-element](https://github.com/karol-f/vue-custom-element)** by karol-f

```
npm install vue-custom-element --save
```
* **Webpack** - we will be using webpack's "LimitChunkCountPlugin" function to prevent app from creating .js chunks for hidden views
```
npm install webpack --save
```

* *(Optional)* **Custom elements polyfill** for cross-browser compatibility, also mentioned in [vue-custom-element](https://github.com/karol-f/vue-custom-element)
```
npm install document-register-element --save
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

