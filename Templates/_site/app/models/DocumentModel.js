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
  'models/NodeModel'
  
], function( $, _, Backbone, NodeModel ){

  // Syntax a bit more similar to Backbone
  var Publican = {};
  Publican.Model = {};
  Publican.Model.Document = Backbone.Collection.extend({

    model : NodeModel

  });

  var DefaultDocument = Publican.Model.Document.extend({

    initialize : function(){
    
    },

    fetch : function(){
    
      this.add(
        [{
        
          "_id" : "1",
          "_rev" : "1",
          "_dom" : "div#header",
          "content" : "It's raining men"

        },
        {
        
          "_id" : "2",
          "_rev" : "2",
          "_dom" : "div#body",
          "content" : "God Bless Mother Nature"

        },
        {
         
          "_id" : "3",
          "_rev" : "3",
          "_dom" : "div#footer",
          "content" : "She taught every angel to rearrange the sky"

         }]
      );

      this.trigger('sync');
    
    }

  });

  return DefaultDocument;

});



