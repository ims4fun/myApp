import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	//Kadira.connect('Sm9DbFxBDDtZabCPh', '36a83bed-9d05-4107-8212-9a8a6cc1e4bd');
  // code to run on server at startup
  Students = new Mongo.Collection("students");
  console.log(Students.find().count());
  if(Students.find().count() == 0) {
  	Students.insert(
  		{
			name:"Imran", 
			age:"30"
		}
  	);
  	Students.insert(
  		{
			name:"Roshan", 
			age:"27"
		}
  	);
  	Students.insert(
  		{
			name:"Jhon", 
			age:"23"
		}
  	);
  	Students.insert(
  		{
			name:"Mark", 
			age:"50"
		}
  	);
  }
  console.log("Server started.......!!!");
});

Meteor.startup(function() {

    return Meteor.methods({

      removeAlldata: function() {

        return Students.remove({});

      },
      insertAlldata: function() {

        Students.insert(
  		{
			name:"Imran", 
			age:"30"
		}
	  	);
	  	Students.insert(
	  		{
				name:"Roshan", 
				age:"27"
			}
	  	);
	  	Students.insert(
	  		{
				name:"Jhon", 
				age:"23"
			}
	  	);
	  	Students.insert(
	  		{
				name:"Mark", 
				age:"50"
			}
	  	);

      }

    });

  });
