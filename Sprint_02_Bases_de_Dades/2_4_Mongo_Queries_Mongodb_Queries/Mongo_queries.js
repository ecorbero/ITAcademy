db.restaurants.find()
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})
db.restaurants.find({},{address:{zipcode:1}, borough:1, name:1, restaurant_id:1, _id:0})
db.restaurants.find({borough:"Bronx"});
db.restaurants.find({borough:"Bronx"},{name:1, _id:0}).limit(5);
db.restaurants.find({borough:"Bronx"},{name:1, _id:0}).skip(5).limit(5);
db.restaurants.find({grades:{$elemMatch:{score:{$gt:90}}}},{name:1, _id:0})
db.restaurants.find({grades:{$elemMatch:{score:{$gt:80,$lt:100}}}},{name:1, _id:0})
db.restaurants.find({'address.coord.0': {$lt:-95.754168}},{name:1, _id:0})
db.restaurants.find({cuisine:{$ne: "American"}, grades:{$elemMatch:{score:{$gt:70}}}, 'address.coord.0': {$lt:-95.754168}},{name:1, _id:0})
db.restaurants.find({cuisine:{$ne: "American"}, grades:{$elemMatch:{score:{$gt:70}}}, 'address.coord.0': {$lt:-95.754168}},{name:1, _id:0})
db.restaurants.find({cuisine:{$ne: "American"}, grades:{$elemMatch:{score:{$gt:70}}}, borough:{$ne : "Brooklyn"}},{name:1, _id:0}).sort({ name: -1})
db.restaurants.find({name:{$regex: /^Wil/}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({name:{ "$regex": "ces$" }},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({name:{"$regex" : ".*Reg.*"}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({cuisine:{$in:["American", "Chinese"]}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({borough:{$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({borough:{$nin:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({grades:{$elemMatch:{score:{$gt:70}}}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0});
db.restaurants.find({$and: [ { cuisine:"Seafood" }, { cuisine:{$ne:"American"}},{ cuisine:{$ne:"Chinese" }} ] , name:{$ne:{$regex: /^Wil/}}},{restaurant_id:1, name:1, borough:1, cuisine:1,  _id:0})
db.restaurants.find({ grades:{$elemMatch:{grade:"A"}}, grades:{$elemMatch:{"date" : ISODate("2014-08-11T00:00:00Z")}}  },{restaurant_id:1, name:1, 'grades.grade':1, _id:0})
db.restaurants.find({ 'grades.1.grade': "A",'grades.1.score': 9, grades:{$elemMatch:{"date" : ISODate("2014-08-11T00:00:00Z")}}  }, {restaurant_id:1, name:1, 'grades.grade':1, _id:0})
db.restaurants.find({ 'address.coord.1':{$gt:42, $lt:52} }, {restaurant_id:1, address:1, borough:1, name:1, _id:0})
db.restaurants.find({   }, { name:1, _id:0}).sort({ name: 1})
db.restaurants.find({   }, { name:1, cuisine:1, _id:0}).sort({ cuisine: -1})
db.restaurants.find({   }, { name:1, cuisine:1, borough:1, _id:0}).sort( { cuisine: 1, borough: -1 } )
db.restaurants.find({ 'address.street': null }, { name:1, _id:0})
db.restaurants.find({ 'address.coord': { $size: 2 } }, { name:1, _id:0})
db.restaurants.find({ grades:{$elemMatch:{score: {$mod: [ 7, 0 ]} }} }, {restaurant_id:1, name:1, 'grades.grade':1, _id:0})
db.restaurants.find({ 'name': {$regex: "mon" } }, {'restaurant_id':1, 'name':1, 'borough':1, 'address.coord':1, 'cuisine':1, _id:0})
db.restaurants.find({ 'name': {$regex: /^Mad/i } }, {'restaurant_id':1, 'name':1, 'borough':1, 'address.coord':1, 'cuisine':1, _id:0})