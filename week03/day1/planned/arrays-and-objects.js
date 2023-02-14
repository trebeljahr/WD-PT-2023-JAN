// multi dimensional arrays - i.e. nested arrays
const multiDimArray = [
  [
    ["a", "b"],
    ["c", "d"],
  ],
  [
    ["e", "f"],
    ["g", 3],
  ],
];

// to access -> bracket notation! nested bracket notation. Each step returns an array as well.
multiDimArray[1][0][0];

// where might this be useful?!
const ticTacToeBoard = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["x", "o", "o"],
];

// exercise - accessing the corners of this board!
// what about the middle?
const topLeftCorner = ticToeBoard[0][0];
const middle = ticTacToeBoard[1][1];
const topRightCorner = ticTacToeBoard[0][2];

// iterating over multi dim arrays? -> you could also use other ways, like forEach or normal for loops.
for (let row of ticTacToeBoard) {
  console.log(row);
  for (let field of row) {
    console.log(field);
  }
}

// now let's mix arrays with objects and practice accessing them.
// real world example from https://randomuser.me/ API

// let's try printing the full name -> Miss Jennie Nichols - like this.
// then print - "Hi I am living in Billings, Michigan, United States. My street is Valwood Pkwy at House Number 8929"
// bonus - "The time zone offset at the coordinates -69.8246 134.8719 is Adelaide, Darwin with +9:30 from UST"

const apiResponse = {
  results: [
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols",
      },
      location: {
        street: {
          number: 8929,
          name: "Valwood Pkwy",
        },
        city: "Billings",
        state: "Michigan",
        country: "United States",
        postcode: "63104",
        coordinates: {
          latitude: "-69.8246",
          longitude: "134.8719",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "jennie.nichols@example.com",
      login: {
        uuid: "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        username: "yellowpeacock117",
        password: "addison",
        salt: "sld1yGtd",
        md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        sha256:
          "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d",
      },
      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 30,
      },
      registered: {
        date: "2007-07-09T05:51:59.390Z",
        age: 14,
      },
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",
      id: {
        name: "SSN",
        value: "405-88-3636",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
      nat: "US",
    },
  ],
  info: {
    seed: "56d27f4a53bd5441",
    results: 1,
    page: 1,
    version: "1.4",
  },
};
