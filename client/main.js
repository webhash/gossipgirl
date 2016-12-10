import { Template } from 'meteor/templating';
import '../imports/startup/accounts-config.js';

import Updates from '../imports/collections/collections.js';

 const updateSub = Meteor.subscribe("updatesChannel");




Template.body.helpers({
	updates() {
		 if (updateSub.ready()) {
   			return Updates.find({}, {sort: {episode: -1}});
 		}
		
	}
});

