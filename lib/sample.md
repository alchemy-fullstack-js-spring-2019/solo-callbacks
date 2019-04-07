# Callbacks

Callbacks are functions that are invoked after some
asynchronous task or event happens. For example:

```js
const button = document.getElementById('button');
button.addEventListener('click', () => {
});
```

```js
const button = document.getElementById('button');
const callback = () => {
}
button.addEventListener('click', callback);
```