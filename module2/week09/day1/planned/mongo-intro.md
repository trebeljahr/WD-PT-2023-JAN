## MongoDB

The database that we are using is MongoDB. MongoDB is a non-relational database that stores data in collections. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and over the time the data structure can change.

**Check if mongo is installed - this way you can also access the mongo shell**

```bash
$ mongo
```

## Terms you might hear:

**Database -> Collections -> Documents -> Fields**

Documents are created using JSON format (or BSON - for binary json). They are key-value objects. 

Some of the most common data types in mongoDB :
- Double	3.141625
- String	“IronHack Coding Bootcamp”
- Date	“Sun Dec 08 07:15:44 UTC 2013”
- Boolean	true
- Object	{ foo: ‘bar’, }
- Array	[“apple”, “oranges”, “kiwis”]
- ObjectID	ObjectId(“52cdef7c4bab8bd675297d8a”)
- Null	null


## Setup 

We wanna download a movies database, you can download a file for practice from here: https://s3-eu-west-1.amazonaws.com/ih-materials/learning-units/movies.json.zip

### Import a JSON file into a collection

```bash
// in the downloads directory
$ unzip movies.json.zip
$ mongoimport --db video --collection movies --file movies.json --jsonArray
```

**Syntax of the import - you can also do it in compass directly**
```bash
mongoimport --db <name of db> --collection <name of collection> --file <path of file>
```
The database is now named video 

Documentation:
https://docs.mongodb.com/manual/reference/operator/query/

## Queries

`{ field: value}`

`{ year: 1994 }` will return all the documents in the movies collection with year equal to 1994

`{ director: "Christopher Nolan" }` will return all documents in the movies collection with director equal to Christopher Nolan

`{ director: "Christopher Nolan", year: 2005 }` will return all documents in the movies collection with director equal to Christopher Nolan and year equal to 2005

If you want to query for an object id, you should specify that in the querie because mong stores the object ids as type ObjectId. If you don't specify it, it will search for a string! You can do it like so: { "_id": ObjectId('someobjectid')}


## Logical operators

### $and
`{ $and: [{ director: "Christopher Nolan" }, { year: 2005 }] }`
**All filters passed to $and must match for a document to be returned.**

### $or
`{ $or: [{ director: "Christopher Nolan" }, { year: 2005 }] }` will return all movies that have either Christopher Nolan as director or 2005 as the year
**At least one of the filters passed to $or must match for a document to be returned.**

### $nor
`{ $nor: [{ director: "Christopher Nolan" }, { year: 2005 }] }` will return all movies that have neither Christopher Nolan as director nor 2005 as year
**None of the filters passed to $nor must match for a document to be returned.**

### $ne
`{ year: { $ne: 1994 } }` return all movies where for the year is **NOT EQUAL** to 1994.

### $gt $gte
`{ year: { $gt: 1995 } }` return all movies where the year is **GREATER THAN** 1995
`{ year: { $gte: 1995 } }` return all movies where the year is **GREATER THAN** or **EQUAL** to 1995

### $lt $lte
`{ rate: { $lt: 8.5 } }` return all movies where the rate is **LESS THAN** 8.5
`{ rate: { $lte: 8.5 } }` return all movies where the rate is **LESS THAN** or **EQUAL** to 8.5

### $combining $lt and $gte
`{$and: [{ year: { $gte: 1990 } }, { year: { $lt: 2000 } }]}` return all movies where the year is >= 1990 and < 2000.

### $in
`{director: { $in: ["Lana Wachowski", "David Fincher", "Joel Coen"] } }` return all movies where the director is in an array ["Lana Wachowski", "David Fincher", "Joel Coen"]
`{year: { $in: [1980, 1990, 2000] } }` return all movies where for year is in the $in array
`{genre: { $in: ["Crime", "Drama"] } }` return all movies where the genre is in the $in array

### $nin
`{year: { $nin: [1980, 1990, 2000] } }` return all movies where year is **NOT** in the $nin array

`{genre: { $nin: ["Crime", "Drama"] } }` return all movies where the genre array doesn't have **ANY** of the values in the $nin array

### $all
`{genre: { $all: ["Crime", "Drama"] } }` return all movies where the genre array has **ALL** values in the $all array

## Projections
`{ year: 1, title: 1 }` return only the year and title
`{ year: 0, title: 0 }` return everything *except* the year and title

## Sort
`{ title: 1 }` sort by ascending order of title.
`{ tile: -1 }` sort by descending order of title.

## MongoDB is very powerful: 
### Example Projection to create a new field: 
{ dayOfMonth: { $dayOfMonth: { $dateFromString: { dateString: "$created_at" } }  } }