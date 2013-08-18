var couchdb = require( 'couchdb' );
var client = couchdb.createClient( 5984, 'localhost' ); // Replace with config object
var db = client.db( 'Domains' );

exports.GET = {
  '/' : function( req, res){

    // List all the domains
  
    res.render( 'Domains/List' );

  }
};

exports.POST = {
  '/' : function( req, res){
  
    res.render( 'home' );

  }
};
