const pathShorten = require( '../dist/path-shorten.min.js' )

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

