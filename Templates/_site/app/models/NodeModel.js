/*
 *
 *  Author: James Meldrum
 *  Date: 8/17/2013
 *  Desc: SuperClass for Publican Models.
 *
 *  Publican Models are Documents that provide the data for Publican Templates
 *
 *  They are simple data structures which map DOM ID's to their content
 *
 */

define([

  'jquery',
  'underscore',
  'backbone',
  
], function( $, _, Backbone ){

  // Syntax a bit more similar to Backbone
  var Publican = {};
  Publican.Model = Backbone.Model.extend({

    defaults : {
    
      '_id' : undefined,  // Couchbase _id
      '_rev' : undefined, // Couchbase _rev
      '_dom' : undefined,  // DOM CSS selector
      'content' : undefined // HTML content

    }

  });

  var NodeModel = Publican.Model.extend({

    initialize: function () {

      // Import data from the models

    },

    renderEdit : function(){
    
      console.log( 'renderEdit' );

    },
    renderView : function(){
    
      // Customized template logic you need

    
    }

  });

  return NodeModel;

});

