// Really don't have anywhere else to record the JSON for these models so I'll
// define it here. Underscore-prefixes indicate CouchDB privates

exports.Domain = {

  "_id"           : undefined,
  "_rev"          : undefined,
  "persona"       : undefined, // Mozilla Persona EMAIL address

};

exports.Document = {

  "_id"   : undefined,
  "_rev"  : undefined,
  "persona" : undefined,
  "title" : undefined,

};

exports.Node = {

  '_id'     : undefined,  // Couchbase _id
  '_rev'    : undefined,  // Couchbase _rev
  'dom'     : undefined,  // DOM CSS selector
  'persona' : undefined,
  'content' : undefined,  // HTML content
  'commit'  : undefined   // Commit hash for the Node's content
                          // Use

};
