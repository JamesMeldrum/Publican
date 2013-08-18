/*
 *
 *  Author: James Meldrum
 *  Date: 8/17/2013
 *  Desc: SuperClass for Publican Templates
 *
 */

define([

  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/DefaultAction/DefaultAction.html',
  'models/DocumentModel'
  
], function( $, _, Backbone, Vm, DefaultActionTemplate, DocumentModel ){

  // Syntax a bit more similar to Backbone
  var Publican = {};
  Publican.View = Backbone.View.extend({

    el: '#container',

    initialize: function () {
    },

    supportedAspects : [
      { 'edit' : 'this.renderEdit()' }, 
      { 'view' : 'this.renderView()' }
    ],

    /*
     *
     * Delegates render request to selected aspect
     *
     * @private
     * @param {string} aspect - the requested aspect
     *
     */

    render: function ( aspect ) {

      var renderArgs = arguments;
      $(this.el).html( DefaultActionTemplate );

      if( _.contains( _.map( this.supportedAspects, function( aspect ) {
        return _.keys( aspect )[0];
      }), aspect ) ){
      
        _.each( this.supportedAspects, function( supportedAspect, key ){

          if( aspect === _.keys( supportedAspect )[0] ){

           _.each( supportedAspect, function( key, val, list ){

             eval(key);

           }.bind( this ));

          }

        }.bind( this ));

      } else {
      
        throw 'Unsupported Aspect handed to render:' + aspect;
      
      }

    }

  });

  var AppView = Publican.View.extend({

    el: '#container',

    initialize: function () {

      // Import data from the models
      this.documentModel = new DocumentModel();
      this.listenTo( this.documentModel, 'sync', this.renderView );
      this.documentModel.fetch();

    },

    renderEdit : function(){
    
      console.log( 'renderEdit' );

    },

    renderView : function(){

     // Can delay the template being rendered 
     // by having it fade in after its been rendered

      this.documentModel.each( function( node ){

        // Render the node
        $( node.get( '_dom' ) ).html( node.get( 'content' ) )

      });
      
    
    }

  });

  return AppView;

});
