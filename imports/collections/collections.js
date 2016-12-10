const Updates = new Mongo.Collection('Updates');

Updates.schema = new SimpleSchema({
  season: {type: Number},
  episode: {type: Number},
  title: {type: String},
  cast: {type: [String]},
});

Updates.insert({season:1, episode:1, title : 'pilot', cast: ['amy', 'rajesh']})
Updates.insert({season:1, episode:2, title : 'first', cast: ['amy', 'rajesh', 'vaibhav']})
module.exports = Updates;