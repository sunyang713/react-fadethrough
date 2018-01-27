# react-fadethrough
A simple react module that will wrap and fade through it's children one by one.
Example: http://sunyang713.github.io/react-fadethrough

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
import Fadethrough from 'react-fadethrough'

/* . . . */

// in your render function
<Fadethrough width={ '800px' } height={ '400px' } interval={ 5000 }>
  <img src={ one } width="800" height="400" />
  <img src={ two } width="800" height="400" />
  <img src={ three } width="800" height="400" />
</Fadethrough>
```

Fadethrough can handle any kind of child component.
```js
import Fadethrough from 'react-fadethrough'


/* . . . */

// in your render function
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
