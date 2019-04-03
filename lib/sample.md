# Callbacks

Callbacks are functions that are invoked after some
asynchronous task or event happens. For example:

```js
const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('This is inside a callback function');
});
```

```js
const button = document.getElementById('button');
const callback = () => {
  console.log('This is inside a callback function');
}
button.addEventListener('click', callback);
```