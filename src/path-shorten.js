// TODO

var HOME_DIR = false

try {
  HOME_DIR = require( 'os' ).homedir()
} catch ( err ) {
  /* ignore */
}

var defaultOptions = {
  home: true, // attempt to transform homedir to '~' by default
  homedir: HOME_DIR, // homedir to detect
  length: 3, // truncation max length
}

var api = function ( text, opts ) {
  opts = Object.assign( {}, defaultOptions, opts || {} )
  var result = text

  if ( opts.home && opts.homedir ) {
    result = text.split( opts.homedir ).join( '~' )
  }

  var words = result.split( /\s+/ )

  words = words.map( function ( word, ind, arr ) {
    if (
      // word.indexOf( '.' ) >= 0 ||
      word.indexOf( '/' ) >= 0 ||
      word.indexOf( '\\' ) >= 0
    ) { // path lookalike
      // normalize windows slashies
      word = word.split( '\\\\' ).join( '/' )

      console.log( 'word: ' + word )

      var head = ''
      while (
        ( word[ 0 ].match( /['"]/ ) )
        ) {
        head += word[ 0 ]
        word = word.slice( 1 )
      }

      // if ( word[ 0 ] === '\'' ) {
      //   head += '\''
      // }
      // if ( word[ 0 ] === '"' ) {
      //   head += '"'
      // }

      // convert windows roots to unix (gitbash) style
      // C:\\Users\\foo -> /c/Users/foo
      if (
          ( word.indexOf( ':/' ) > 0 )
        ) {
          var index = word.indexOf( ':/' )

          var before = word.slice( 0, index )

          var drive = before

          while ( !drive[ 0 ].match( /[a-zA-Z]/ ) ) {
            drive = before.slice( before.length - drive.length + 1 )
            console.log( 'drive: ' + drive )
          }

          var driveOkay = (
            ( typeof drive === 'string' ) &&
            ( drive.match( /[a-zA-Z]/ ) ) // is letter
          )

          // make sure no slashes precedes
          // and the drive is a single letter
          if (
            ( before.indexOf( '/' ) === -1 ) &&
            ( driveOkay )
          ) {
            head += (
              drive.toLowerCase() + '/'
            )

            word = word.slice( index + 2 )
          }
      }

      var split = word.split( '/' )

      // normalize after first '/'
      if ( split.length > 1 ) {
        var a = split.shift()
        var b = split.join( '/' )

        word = ( a + '/' + normalize( b ) )
      }

      // cut off any trailing '/'
      while ( word.length > 1 && word[ word.length - 1 ] === '/' ) word = word.slice( 0, -1 )

      var pathNames = word.split( '/' )
      var tail = pathNames.pop() // keep tail ( filename ) as is

      // var tailEnd = tail.length
      // if ( tail[ tailEnd - 1 ] === '\'' ) {
      //   tail = tail.slice( 0, -1 )
      // }

      var buffer = ''

      pathNames.forEach( function ( fileName ) {
        if ( fileName ) {
          if ( fileName.indexOf( ':' ) >= 0 ) {
            return buffer += fileName + '/'
          }

          var i
          var len = opts.length

          // make room for leading ~ and leading .
          if ( fileName[ 0 ] === '~' || fileName[ 0 ] === '.' ) len += 1

          // remember to cap the length
          if ( len > fileName.length ) len = fileName.length

          // construct the shortened path name
          for ( i = 0; i < len; i++ ) {
            buffer += fileName[ i ]
          }

          // add the path separator
          buffer += '/'
        }
      } )

      // keep leading '/'
      if (
        ( word[ 0 ] === '/' ) &&
        ( buffer[ 0 ] !== word[ 0 ] )
      ) {
        buffer = '/' + buffer
      }

      if ( head ) {
        // buffer = head + '/' + buffer
        buffer = head + buffer
      }

      if ( typeof opts.post === 'function' ) {
        return opts.post( buffer + tail )
      }

      return buffer + tail
      // return '(( ' + buffer + tail + ' ))'
    }

    return word
  } )

  return (
    words.join( ' ' )
  )
}

function normalize ( path ) {
  return path.split( /\/+/ ).join( '/' )
}

module.exports = api
