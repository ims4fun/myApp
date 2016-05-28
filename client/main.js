import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Students = new Mongo.Collection("students");
console.log(Students.find().count());

/*var data_values = 
	[
		{
			name:"imran", 
			age:"2"
		},
		{
			name:"thusitha", 
			age:"3"
		},
		{
			name:"rohan", 
			age:"5"
		},
	];*/

//Template.data.helpers({data:data_values});
Template.data.helpers({data:Students.find()});


Template.data.events({
	'click .js-data':function(event) {
	   console.log(event);
       $(event.target).css("background","green");
	},
	'click .js-insert-all-data':function(event) {
	   Meteor.call('insertAlldata');
	},
	'click .js-del-data':function(event) {
	   console.log(event);
	   var student_id = this._id;
	   //$("#" + student_id).hide('slow', function() {
	   		Students.remove({"_id":student_id});
	  // })
	},
	'click .js-update-data':function(event) {
	   console.log(event);
	   var student_id = this._id;
	   //$("#" + student_id).hide('slow', function() {
	   		Students.update({_id : student_id},{$set:{name : "Unkown", age : "Null"}});
	  // })
	},
	'click .js-del-all-data':function(event) {
	   Meteor.call('removeAlldata');
	}

	
})
