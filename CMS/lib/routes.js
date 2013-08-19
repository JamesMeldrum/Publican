var couchdb = require( 'couchdb' );
var client = couchdb.createClient( 5984, 'localhost' ); // Replace with config object
var db = client.db( 'publican' );

exports.GET = {
  '/' : function( req, res){

    // List all the domains

    db.openDoc( '_design/domain/_view/all' ).then( function( doc ){

      res.render( 'Domains/List', {
        
        domains : doc.rows

      });

    });

  },

  '/domains/:domain_id' : function( req, res ){

    var domainId = req.url.split('/')[2];

    db.openDoc( domainId ).then( function( doc ){

      res.render('Domains/Detail',{
    
        domain : doc

      });

    });

  }

};

exports.POST = {
  '/' : function( req, res){
  
    res.render( 'home' );

  }
};
