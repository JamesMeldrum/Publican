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
    
      this.add(
        [{
        
          "_id" : "1",
          "_rev" : "1",
          "_dom" : "header"

        },
        {
        
          "_id" : "2",
          "_rev" : "2",
          "_dom" : "body"

        },
        {
         
          "_id" : "3",
          "_rev" : "3",
          "_dom" : "footer"

         }]
      );

    }

  });

  return DefaultDocument;

});


