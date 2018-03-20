# path-shorten

Simple path shortener

# Easy to use

```javascript
const pathShorten = require( 'path-shorten' )
console.log( pathShorten( '/one/two/three/four/five.txt' ) )
console.log( pathShorten( 'C:\\Users\\mollie\\Documents\\\\some-project' ) )
console.log( pathShorten( '/Users/mollie/foo/bar' ) )
```
> /one/two/thr/fou/five.txt

> c/Use/mol/Doc/some-project

> ~/foo/bar

# Why

To transform paths to the gist and reduce clutter.

# How

Simple string manipulation.

# Usage

```javascript
const pathShorten = require( 'path-shorten' )

// default options
const opts = {
  home: true, // attempt to transform homedir to '~'
  homedir: require( 'os' ).homedir(),
  length: 3, // path truncation max length
}

// post transformation function
opts.post = function ( url ) {
  return '[ ' + url + ' ]'
}

const text = 'text with /path/like/stuff.txt'
console.log( pathShorten( text, opts ) )
```

> 'text with [ /pat/lik/stuff.txt ]'

# Other

Leading dots of filenames are preserved. Last filename is not truncated.

# Test

```bash
npm test
```
