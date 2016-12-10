import { Meteor } from 'meteor/meteor';
import Updates from '../imports/collections/collections.js'


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('updatesChannel', function () {
   return Updates.find();
  });

});
