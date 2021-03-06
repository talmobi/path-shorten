let pathShorten = require( '../dist/path-shorten.min.js' )

if ( process.env.test_source ) pathShorten = require( '../src/path-shorten.js' )

const test = require( 'tape' )

test( 'path 1', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( '/one/two/three/four/five.txt' ),
    '/one/two/thr/fou/five.txt'
  )
} )

test( 'path 2', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( '/one/two/three/four/five.txt' ),
    '/one/two/thr/fou/five.txt'
  )
} )

test( 'path 3', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( '/one/two/three/four/five.txt' ),
    '/one/two/thr/fou/five.txt'
  )
} )

test( 'path 4', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( 'one/two/three/four/five.txt' ),
    'one/two/thr/fou/five.txt'
  )
} )

test( 'path 5', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( './one/two/three/four/five.txt' ),
    './one/two/thr/fou/five.txt'
  )
} )

test( 'path 6', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( './one/two/three/four/five' ),
    './one/two/thr/fou/five'
  )
} )

test( 'path 7', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( 'C:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' ),
    'c/Use/tal/Doc/valmet-iseal'
  )
} )

test( 'path 8', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( 'sadfC:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' ),
    'sadfc/Use/tal/Doc/valmet-iseal'
  )
} )

test( 'path 9', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( 'sadf F:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' ),
    'sadf f/Use/tal/Doc/valmet-iseal'
  )
} )

test( 'path 10', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( '\'sadfF:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal\'' ),
    '\'sadff/Use/tal/Doc/valmet-iseal\''
  )
} )

test( 'path 11', function ( t ) {
  t.plan( 1 )
  t.equal(
    pathShorten( 'console.error("Error: Cannot find module \'./storex.js\' from \'C:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal\' foo bar' ),
    'console.error("Error: Cannot find module \'./storex.js\' from \'c/Use/tal/Doc/valmet-iseal\' foo bar'
  )
} )

test( 'test opts.pre function', function ( t ) {
  t.plan( 2 )

  const opts = {
    pre: function ( url ) {
      t.equal( url, '/one/two/three/four/five.txt', 'received opts.pre before shortening' )
      return 'NONE'
    }
  }

  t.equal(
    pathShorten( 'whale giraffe /one/two/three/four/five.txt cottage', opts ),
    'whale giraffe NONE cottage'
  )
} )

test( 'test opts.pre function normalized path', function ( t ) {
  t.plan( 2 )

  const opts = {
    pre: function ( url ) {
      t.equal( url, '\'c/Users/talmoch/Documents/valmet-iseal\'', 'opts.pre before shortening but after normalization' )
      return 'NONE'
    }
  }

  t.equal(
    pathShorten( '   console.error("Error: Cannot find module \'storex.js\' from \'C:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal\' foo bar', opts ),
    '   console.error("Error: Cannot find module \'storex.js\' from NONE foo bar'
  )
} )

test( 'test opts.post function', function ( t ) {
  t.plan( 2 )

  const opts = {
    post: function ( url ) {
      t.equal( url, '/one/two/thr/fou/five.txt', 'receive transformed url in opts.post' )
      return '[ ' + url + ' ]'
    }
  }

  t.equal(
    pathShorten( 'whale giraffe /one/two/three/four/five.txt cottage', opts ),
    'whale giraffe [ /one/two/thr/fou/five.txt ] cottage'
  )
} )

test( 'shorten paths while keeping whitespace in-between paths', function ( t ) {
  t.plan( 1 )

  const opts = {}

  t.equal(
    pathShorten( 'whale    giraffe /one/two/three/four/five.txt cottage /another/path     ', opts ),
    'whale    giraffe /one/two/thr/fou/five.txt cottage /ano/path     '
  )
} )

test( 'remove slashed tail', function ( t ) {
  t.plan( 1 )

  t.equal(
    pathShorten( 'path/to/file/' ),
    'pat/to/file'
  )
} )

test( 'normalize paths', function ( t ) {
  t.plan( 1 )

  t.equal(
    pathShorten( 'path/to/file///.././' ), // NOTICE .. to move up 1 dir
    'pat/to'
  )
} )

test( 'opts.length: -1', function ( t ) {
  t.plan( 1 )

  const opts = { length: -1 } // defaults to 3 when falsy or less than 1

  t.equal(
    pathShorten( 'path/to/file', opts ),
    'pat/to/file'
  )
} )

test( 'opts.length: 0', function ( t ) {
  t.plan( 1 )

  const opts = { length: 0 } // defaults to 3 when falsy or less than 1

  t.equal(
    pathShorten( 'path/to/file', opts ),
    'pat/to/file'
  )
} )
