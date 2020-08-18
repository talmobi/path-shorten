[![npm](https://img.shields.io/npm/v/path-shorten.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/path-shorten)
[![npm](https://img.shields.io/npm/l/path-shorten.svg?maxAge=3600&style=flat-square)](https://github.com/talmobi/path-shorten/blob/master/LICENSE)
![mac](https://github.com/talmobi/path-shorten/workflows/mac/badge.svg)
![ubuntu](https://github.com/talmobi/path-shorten/workflows/ubuntu/badge.svg)
![windows](https://github.com/talmobi/path-shorten/workflows/windows/badge.svg)

# path-shorten

Simple path shortener

## Easy to use

```javascript
const pathShorten = require( 'path-shorten' )
console.log( pathShorten( '/one/two/three/four/five.txt' ) )
console.log( pathShorten( 'C:\\Users\\mollie\\Documents\\\\some-project' ) )
console.log( pathShorten( '/Users/mollie/foo/bar' ) )
```
```
/one/two/thr/fou/five.txt
c/Use/mol/Doc/some-project
~/foo/bar
```

## Why

To transform paths to the gist and reduce clutter.

## How

Simple string manipulation.

## Usage

```javascript
const pathShorten = require( 'path-shorten' )

// default options
const opts = {
  home: true, // attempt to transform homedir to '~'
  homedir: require( 'os' ).homedir(),
  length: 3, // path truncation max length
}

// optional post transformation function ( for each url found in text )
opts.post = function ( url ) {
  return '[ ' + url + ' ]'
}

const text = 'text with /path/like/stuff.txt'
console.log( pathShorten( text, opts ) )
```
```
text with [ /pat/lik/stuff.txt ]
```

#### Similar to `vim`'s `pathshorten` ( but not identical )
```
pathshorten({expr})                      pathshorten()
  Shorten directory names in the path {expr} and return the
  result.  The tail, the file name, is kept as-is.  The other
  components in the path are reduced to ${ opts.length || 3 } letters.  Leading
  '~' and '.' characters are kept.
  
  Example:
  :echo pathshorten('~/.vim/autoload/myfile.vim')
  ~/.v/a/myfile.vim
                        
  It doesn't matter if the path exists or not.
```

## Test

```bash
npm test
```
