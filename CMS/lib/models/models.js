// Really don't have anywhere else to record the JSON for these models so I'll
// define it here. Underscore-prefixes indicate CouchDB privates

exports.Domain = {

  "_id"           : undefined,
  "_rev"          : undefined,
  "persona"       : undefined, // Mozilla Persona EMAIL address
  "family"        : undefined, // Family in the document hierarchy
  "title"         : undefined

};

exports.Document = {

  "_id"   : undefined,
  "_rev"  : undefined,
  "persona" : undefined,
  "family"  : undefined,
  "title" : undefined,
  "domain_ids" : [] // What Domain this document is a member of

};

exports.Node = {

  '_id'     : undefined,  // Couchbase _id UUID
  '_rev'    : undefined,  // Couchbase _rev
  "family"  : undefined,
  'document_ids' : [], // What document this Node is a member of
  'dom'     : undefined,  // DOM CSS selector
  'persona' : undefined,
  'content' : undefined,  // HTML content
  //'commit'  : undefined   // Commit hash for the Node's content
                          // Use

};
