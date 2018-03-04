const pathShorten = require( './path-shorten.js' )

function test ( path ) {
  console.log( 'path   : ' + path )
  console.log( 'short  : ' + pathShorten( path ) )
  console.log()
}

test( '/one/two/three/four/five.txt' )

test( 'one/two/three/four/five.txt' )

test( './one/two/three/four/five.txt' )

test( './one/two/three/four/five' )

test( 'C:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' )

test( 'sadfC:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' )

test( 'sadf F:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal' )

test( '\'sadfF:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal\'' )

test( 'console.error("Error: Cannot find module \'./storex.js\' from \'C:\\\\Users\\\\talmoch\\\\Documents\\\\valmet-iseal\' foo bar' )
