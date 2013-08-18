'use strict';

/*
 *
 * Writes the applications routing table
 * prior to application start
 *
 * @sync
 * @param {Publican.CMS} - Stalled instance of Publican.CMS
 *
 */

var routes = require( './routes' );

exports.draftRoutingTable = function( publicanCMSInstance ){

  // TODO: Build GET/POST routes based on routing
  //       configuration file
  publicanCMSInstance.get('/', routes['GET']['/']);

};
