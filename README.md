# react-fadethrough
A simple react module that will wrap and fade through it's children one by one.


### Installation

To install the stable version:

```
npm install --save react-fadethrough
```

This assumes that you’re using [npm](https://www.npmjs.com/) package manager with a module bundler like [Webpack](http://webpack.github.io) or [Browserify](http://browserify.org/) to consume [CommonJS modules](http://webpack.github.io/docs/commonjs.html).


### Usage

Wrap at least two elements of any kind inside an enclosing FadeThrough component. The FadeThrough will go through each component and apply and opacity transition. You'll need to apply width, height, and delay props to FadeThrough (the child components are rendered with absolute position).


```js
import FadeThrough from 'react-fadethrough'
import myImage from 'some/path/to/myImage.jpg'



export default class MyFadeThroughTest {
  render() {
    return (
      <div>
        <FadeThrough
          width={ '200px' }
          height={ '300px' }
          delay={ 5000 }
        >
          <h1>{ 'hello!' }</h1>
          <h1>{ 'world.' }</h1>
          <div style={ { backgroundImage: 'url(' + myImage + ')' } } />
          <p>{ 'test test test test' }</p>
        </FadeThrough>
      </div>
    )
  }
}


```


I think this can already be achieved with React's CSSTransitionGroup or something, but that means you need the entire ReactAddon which won't let you use react-lite. This is just an isolated and specific use case that could be convenient for making something quick.

See it in action: http://www.columbia.edu/cu/sabor (sometime around early February).

If you have any questions, hmu on facebook: http://www.facebook.com/sunyang713


### License

ISC
