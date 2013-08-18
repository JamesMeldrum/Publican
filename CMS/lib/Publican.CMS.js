/*
 * Publican.CMS
 * https://github.com/jrm/CMS
 *
 * Copyright (c) 2013 James Meldrum
 * Licensed under the MIT license.
 */

'use strict';

var express = require( 'express' ),
    exphbs  = require( 'express3-handlebars' ),
    config  = require( './config' ).config,
    router  = require( './router' ),
    http    = require( 'http' ),
    path    = require( 'path' );

var PublicanCMS = express();
var hbs = exphbs.create({});

// Config
  // Template rendererr
PublicanCMS.engine( 'handlebars', hbs.engine );
PublicanCMS.set( 'view engine', 'handlebars' );

  // Server
PublicanCMS.set( 'port', process.env.PORT || config.PORT );
PublicanCMS.set( 'views', __dirname + '/views' );

  // Draft routing table
router.draftRoutingTable( PublicanCMS ); 

  // Run Server
console.log( 'Publican.CMS is running on %s', PublicanCMS.get( 'port' ));
PublicanCMS.listen( PublicanCMS.get( 'port' ) );
