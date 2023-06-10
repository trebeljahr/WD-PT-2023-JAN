# Data Models

## 2 ways of structuring relationships between Documents

### Embedded Data Models

```js
 // user
  {
    _id: ObjectId('5d6f72b128f00f5856e04703'),
    username: "123xyz",
    contact: {
      phone: "123-567",
      email: "xyz@example.com"
    },
    access: {
      level: 3,
      group: "dev"
    }
  }
```

- useful to store related information in the same record
- fewer queries will be needed to retrieve the `contact` and `access` data

### Normalized Data Model (or References)

```js
  // user
  {
    _id: ObjectId('5d6f72b128f00f5856e04703'),
    username: "123xyz",
    contact_id: ObjectId('2'),
    access_id: ObjectId('3')
  }

  // contact
  {
    _id: ObjectId('2'),
    user_id: ObjectId('5d6f72b128f00f5856e04703'),
    phone: "123-567",
    email: "xyz@example.com"
  }

  // access
  {
    _id: ObjectId('3'),
    user_id: ObjectId('5d6f72b128f00f5856e04703'),
    level: 3,
    group: "dev"
  }
```

<!-- db.contact.find({ user_id: '5d6f72b128f00f5856e04703' }) -->

- useful when you want to use the data on it's own
- to represent more complex one-to-many (or many-to-many) relationships

## Relationship Types

### One-to-One

```js
    // reference
  // user
  {
    _id: ObjectId('1'),
    name: 'John Doe'
  }

  // ssn
  {
    _id: ObjectId('2'),
    user_id: ObjectId('1'),
    ssn: 42
  }

  =>
    // embedded
  // user
  {
    _id: ObjectId('1'),
    name: 'John Doe',
    ssn: 42
  }
```

### One-to-Many

#### embedding

```js
// reference
  // user
  {
    _id: ObjectId('1'),
    name: 'John Doe'
  }

  // address
  {
    _id: ObjectId('2'),
    customer_id: ObjectId('1'),
    street: 'sesame',
    city: 'NYC'
  }

  // address
  {
    _id: ObjectId('3'),
    customer_id: ObjectId('1'),
    street: '10 downing street',
    city: 'London'
  }

  =>
  // embedded
  // user
  {
    _id: ObjectId('1'),
    name: 'John Doe',
    addresses: [
      {
        street: 'sesame',
        city: 'NYC'
      }
      {
        street: '10 downing street',
        city: 'London'
      }
    ]
  }
```

- embedding the many side makes sense if there is no need to access the embedded object outside of the context of the parent

#### normalized (reference)

```js
// book
 {
     _id: ObjectId('1'),
     title: "MongoDB: The Definitive Guide",
     author: [ "Kristina Chodorow", "Mike Dirolf" ],
     pages: 216,
     language: "English",
     publisher: {
                name: "O'Reilly Media",
                founded: 1980,
                location: "CA"
              }
  }
// book
  {
    _id: ObjectId('2'),
     title: "50 Tips and Tricks for MongoDB Developer",
     author: "Kristina Chodorow",
     pages: 68,
     language: "English",
     publisher: {
                name: "O'Reilly Media",
                founded: 1980,
                location: "CA"
              }
  }

  =>
  // publisher - the book ids are stored in an array in the publisher document
  // that works as long as the array does not get too big
  {
   _id: ObjectId('3'),
   name: "O'Reilly Media",
   founded: 1980,
   location: "WY",
   book_ids: [ObjectId('1'), ObjectId('2')]
  }

  // book
  {
     _id: ObjectId('1'),
     title: "MongoDB: The Definitive Guide",
     author: [ "Kristina Chodorow", "Mike Dirolf" ],
     published_date: ISODate("2010-09-24"),
     pages: 216,
     language: "English",
  }
  // book
  {
     _id: ObjectId('2'),
     title: "50 Tips and Tricks for MongoDB Developer",
     author: "Kristina Chodorow",
     published_date: ISODate("2011-05-06"),
     pages: 68,
     language: "English",
}
  =>
  // Here we removed the array of the book ids from the publisher document and 
  // instead added a publisher_id to the book document
  {
   _id: ObjectId("1"),
   name: "O'Reilly Media",
   founded: 1980,
   location: "CA"
}

{
   _id: ObjectId("2"),
   title: "MongoDB: The Definitive Guide",
   author: [ "Kristina Chodorow", "Mike Dirolf" ],
   published_date: ISODate("2010-09-24"),
   pages: 216,
   language: "English",
   publisher_id: ObjectId("1")
}

{
   _id: ObjectId("3"),
   title: "50 Tips and Tricks for MongoDB Developer",
   author: "Kristina Chodorow",
   published_date: ISODate("2011-05-06"),
   pages: 68,
   language: "English",
   publisher_id: ObjectId("1")
}
```