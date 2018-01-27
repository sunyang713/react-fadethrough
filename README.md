# react-fadethrough
A simple react module that will wrap and fade through it's children one by one.


### Installation

```
npm install --save react-fadethrough
```

### Usage

Wrap elements of any kind inside an enclosing Fadethrough component. The Fadethrough will iterate over and fade-transition through the components. The Fadethrough comopnent can take an optional width, optional height, or optional interval period.

**Props**
- width: a string equivalent to the CSS height property. Default: '100%'.
- height: a string equivalent to the CSS height property. Default: '100%'.
- interval: a number representing the interval time in milliseconds between each element. Default: 3000.

```js
<Fadethrough width={ '800px' } height={ '400px' } interval={ 3000 }>
  <img src={ one } width="800" height="400" />
  <img src={ two } width="800" height="400" />
  <img src={ three } width="800" height="400" />
</Fadethrough>
```

Fadethrough can handle any kind of child component.
```js
<FadeThrough>
  <h1>{ 'hello!' }</h1>
  <div style={ { backgroundImage: 'url(' + myImage + ')' } } />
  <p>{ 'test test test test' }</p>
  <p>{ 'test 123' }</p>
  <img src={ three } width="800" height="400" />
</FadeThrough>
```

### License

MIT
