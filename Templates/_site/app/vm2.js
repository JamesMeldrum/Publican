// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'events'
], function($, _, Backbone, Events){

  var MargaretThatcher = Backbone.View.extend({

    views : {}, // Object containing views
    viewQueue : [], // Array of views that have been scheduled
  
    destroy : function (context, name, View, options){
    
      this.views[name].undelegateEvents();
  
    },

    _create : function (context, name, View, options) {
  
      if(typeof this.views[name] !== 'undefined') {
        this.views[name].undelegateEvents();
        if(typeof this.views[name].clean === 'function') {
          this.views[name].clean();
        }
      }

      var view = new View( options ); // Intercept initialize event
      this.views[name] = view;

      if(typeof context.children === 'undefined'){
        context.children = {};
        context.children[name] = view;
      } else {
        context.children[name] = view;
      }
  
      return view;
    },

    create : function( context, name, View, options ){

      this.viewQueue.push( function(){
        this._create(context, name, View, options);
      });

      this.activeView = name;

      if( this.viewQueue.length > 0 ){
        this.viewQueue[0].trigger('destroyView');
      }

    },

    initialize : function(){
    
      this.on('viewDestroyed', function(){

        if( this.viewQueue.length > 0 ){
        
          this.viewQueue[0]();
          this.viewQueue = this.viewQueue(slice(-this.viewQueue.length+1));
        
        }

      }.bind( this ));

    }
  
  });
  
  var derp = new MargaretThatcher();
  return derp;
});
