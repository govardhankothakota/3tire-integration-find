const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

let movieSchema = new mongoose.Schema({
  no: String,
  movie: String,
  year: Number,
  rating: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(10|[0-9](\.[0-9])?)$/.test(v);
      },
      message: (props) => `${props.value} is not a valid rating!`,
    },
    required: [true, "rating is required"],
  },
  stars: String,
  image: String,
  imdbURL: String,
});
let movieDetails = new mongoose.model(`movieslist`, movieSchema);

let insertMoviesDataIntoMDB = async () => {
  try {
    let movie1 = new movieDetails({
      no: 1,
      movie: "Student No: 1",
      year: "2001",
      rating: "6.6",
      stars: "N.T. Rama Rao Jr., Gajala, Rajeev Kanakala",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmJiNzZjOWItOTUwNS00NTFmLTk1OWYtZmUzZWMwZDg2MGQ4XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg",
      imdbURL: "https://www.imdb.com/title/tt1283956/?ref_=ls_t_1",
    });
    let movie2 = new movieDetails({
      no: 2,
      movie: "Simhadri",
      year: "2003",
      rating: "7.3",
      stars: "N.T. Rama Rao Jr, Bhoomika Chawla, Ankita",
      image:
        "https://preview.redd.it/simhadri-appreciation-post-v0-0codeh0yzy0b1.jpg?auto=webp&s=c909bc883cfd560c4b2769e0392e2e3ef83e479b",
      imdbURL: "https://www.imdb.com/title/tt0375066/?ref_=ls_t_2",
    });
    let movie3 = new movieDetails({
      no: 3,
      movie: "Sye Challenge",
      year: "2005",
      rating: "7.6",
      stars: "Prabhas, Bhanupriya, Shriya Saran",
      image: "https://images.justwatch.com/poster/308632736/s718/sye.jpg",
      imdbURL: "https://www.imdb.com/title/tt0467003/?ref_=ls_t_3",
    });
    let movie4 = new movieDetails({
      no: 4,
      movie: "Chatrapathi",
      year: "2004",
      rating: "7.4",
      stars: "Nithiin, Genelia Deshmukh, Preeti Nigam",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjUzOWJkY2YtMTU5ZC00NTVmLTlmNzUtYzQ3YzRhNTczZDVkXkEyXkFqcGdeQXVyMTQyMzAwMjUz._V1_.jpg",
      imdbURL: "https://www.imdb.com/title/tt0843328/?ref_=ls_t_4",
    });
    let movie5 = new movieDetails({
      no: 5,
      movie: "Vikramarkudu",
      year: "2006",
      rating: "7.7",
      stars: "Ravi Teja, Anushka Shetty, Annie",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDQ4MDFjNmQtNGU0MC00ZDVmLTliNmItZWE1NjRkNjYxMmFlXkEyXkFqcGdeQXVyMTQyMzAwMjUz._V1_.jpg",
      imdbURL: "https://www.imdb.com/title/tt0858492/?ref_=ls_t_5",
    });
    let movie6 = new movieDetails({
      no: 6,
      movie: "Yamadonga",
      year: "2007",
      rating: "7.2",
      stars: "N.T. Rama Rao Jr., Mohan Babu, Priyamani",
      image: "https://static.toiimg.com/photo/61315915.cms",
      imdbURL: "https://www.imdb.com/title/tt0924317/?ref_=ls_t_6",
    });
    let movie7 = new movieDetails({
      no: 7,
      movie: "Magadheera",
      year: "2009",
      rating: "7.7",
      stars: "Ram Charan, Kajal Aggarwal, Dev Gill",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDRkNmNiYTYtYjIxNi00MjQyLThlZWQtYmU0NDMxNDE0NWYzXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_FMjpg_UX1000_.jpg",
      imdbURL: "https://www.imdb.com/title/tt1447500/?ref_=ls_t_7",
    });
    let movie8 = new movieDetails({
      no: 8,
      movie: "Maryada Ramanna",
      year: "2010",
      rating: "7.4",
      stars: "Sunil, SaloniAswani, Nagineedu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKG0TJjl4TdnD5MIp4bRuJSte_BexxgXzHg&s",
      imdbURL: "https://www.imdb.com/title/tt1582546/?ref_=ls_t_8",
    });
    let movie9 = new movieDetails({
      no: 9,
      movie: "Eega",
      year: "2012",
      rating: "7.7",
      stars: "Sudeep, Nani, Samantha Ruth Prabhu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXW8wkMGdOSHlovRZZc0YIjfPNheG7kHtEw&s",
      imdbURL: "https://www.imdb.com/title/tt2258337/?ref_=ls_t_9",
    });
    let movie10 = new movieDetails({
      no: 10,
      movie: "Baahubali: The Beginning",
      year: "2015",
      rating: "7.2",
      stars: "Prabhas, Rana Daggubati, Anushka Shetty",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      imdbURL: "https://www.imdb.com/title/tt2631186/?ref_=ls_t_10",
    });
    let movie11 = new movieDetails({
      no: 11,
      movie: " Baahubali 2: The Conclusion",
      year: "2017",
      rating: "8.2",
      stars: "Prabhas, Rana Daggubati, Anushka Shetty",
      image:
        "https://m.media-amazon.com/images/I/71i8a-PnChL._AC_UF1000,1000_QL80_.jpg",
      imdbURL: "https://www.imdb.com/title/tt4849438/?ref_=ls_t_11",
    });
    let movie12 = new movieDetails({
      no: 12,
      movie: " RRR",
      year: "2022",
      rating: "7.8",
      stars: "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      imdbURL: "https://www.imdb.com/title/tt8178634/?ref_=ls_t_12",
    });
    movieDetails.insertMany([
      movie1,
      movie2,
      movie3,
      movie4,
      movie5,
      movie6,
      movie7,
      movie8,
      movie9,
      movie10,
      movie11,
      movie12,
    ]);
    console.log("Successfully insert moviesdata into DB");
  } catch (error) {
    console.log("Unable to insert moviesdata into DB");
  }
};

let getmoviesDataFromDB = async () => {
  let moviesArray = await movieDetails.find();
  console.log(moviesArray);
};

app.get("/movieslist", async (req, res) => {
  let moviesArray = await movieDetails.find();
  res.json(moviesArray);
});

app.listen(13189, () => {
  console.log("Listening to port 13189 movies");
});

let cricketPlayersSchema = new mongoose.Schema({
  id: String,
  image: String,
  playerName: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z ]{2,30}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid name`,
    },
    required: [true, "name is Mandatory"],
  },
  age: {
    type: Number,
    min: [18, "player age is below 18 years"],
    max: [50, "invalid age"],
    required: [true, "age is mandatory"],
  },
  role: String,
  emailID: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: [true, "email is mandatory"],
  },
  instagramID: String,
});
let cricketPlayersDetails = new mongoose.model(
  `cricketplayerslist`,
  cricketPlayersSchema
);
let insertCricketPlayersDataIntoMDB = async () => {
  try {
    let player1 = new cricketPlayersDetails({
      id: "1",
      image:
        "https://bcciplayerimages.s3.amazonaws.com/resizedimageskirti/107_compress.png",
      playerName: "Rohit sharma",
      age: 37,
      role: "Right-Handed Batsman(C)",
      emailID: "rohitsharma@gmail.com",
      instagramID: "https://www.instagram.com/rohitsharma45/?hl=en",
    });
    let player2 = new cricketPlayersDetails({
      id: "2",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/3761_compress.png",
      playerName: "Shubman Gill",
      age: 24,
      role: "Right-Handed Batsman",
      emailID: "ShubmanGill@gmail.com",
      instagramID: "https://www.instagram.com/shubmangill/?hl=en",
    });
    let player3 = new cricketPlayersDetails({
      id: "3",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/1212_compress.png",
      playerName: "Suryakumar Yadav",
      age: 33,
      role: "Right-Handed Batsman",
      emailID: "SuryakumarYadav@gmail.com",
      instagramID: "https://www.instagram.com/surya_14kumar/?hl=en",
    });
    let player4 = new cricketPlayersDetails({
      id: "4",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/164_compress.png",
      playerName: "Virat Kohli",
      age: 35,
      role: "Right-Handed Batsman",
      emailID: "ViratKohli@gmail.com",
      instagramID: "https://www.instagram.com/virat.kohli/?hl=en",
    });
    let player5 = new cricketPlayersDetails({
      id: "5",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/1113_compress.png",
      playerName: "Axar Patel",
      age: 30,
      role: "left-Handed Batsman,left-Arm off Spin Bowler",
      emailID: "AxarPatel@gmail.com",
      instagramID: "https://www.instagram.com/akshar.patel/?hl=en",
    });
    let player6 = new cricketPlayersDetails({
      id: "6",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/2740_compress.png",
      playerName: "Hardik Pandya",
      age: 30,
      role: "Right-Handed Batsman,Right-Arm Medium Fast Bowler",
      emailID: "HardikPandya@gmail.com",
      instagramID: "https://www.instagram.com/hardikpandya93/?hl=en",
    });
    let player7 = new cricketPlayersDetails({
      id: "7",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/9_compress.png",
      playerName: "Ravindra Jadeja",
      age: 35,
      role: "left-Handed Batsman,left-Arm Spin Bowler",
      emailID: "RavindraJadeja@gmail.com",
      instagramID: "https://www.instagram.com/royalnavghan/?hl=en",
    });
    let player8 = new cricketPlayersDetails({
      id: "8",
      image:
        "https://bcciplayerimages.s3.amazonaws.com/resizedimageskirti/2972_compress.png",
      playerName: "Rishabh Pant",
      age: 26,
      role: "left-Handed Batsman(WK)",
      emailID: "RishabhPant@gmail.com",
      instagramID: "https://www.instagram.com/rishabpant/?hl=en",
    });
    let player9 = new cricketPlayersDetails({
      id: "9",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/3840_compress.png",
      playerName: "Mohammed Siraj",
      age: 30,
      role: "Right-Arm Fast Medium Bowler",
      emailID: "MohammedSiraj@gmail.com",
      instagramID: "https://www.instagram.com/mohammedsirajofficial/?hl=en",
    });
    let player10 = new cricketPlayersDetails({
      id: "10",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/1124_compress.png",
      playerName: "Jasprit Bumrah",
      age: 30,
      role: "Right-Arm FastBowler",
      emailID: "JaspritBumrah@gmail.com",
      instagramID: "https://www.instagram.com/jaspritb1/?hl=en",
    });
    let player11 = new cricketPlayersDetails({
      id: "11",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/261_compress.png",
      playerName: "Kuldeep Yadav",
      age: 29,
      role: "Left-Arm Leg Spin Bowler",
      emailID: "KuldeepYadav@gmail.com",
      instagramID: "https://www.instagram.com/kuldeep_18/?hl=en",
    });
    let player12 = new cricketPlayersDetails({
      id: "12",
      image:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/65_compress.png",
      playerName: "Arshdeep Singh",
      age: 25,
      role: "Left-Arm Medium Fast Bowler",
      emailID: "ArshdeepSingh@gmail.com",
      instagramID: "https://www.instagram.com/_arshdeep.singh__/?hl=en",
    });

    cricketPlayersDetails.insertMany([
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      player12,
    ]);
    console.log("Successfully insert cricket players data into DB");
  } catch (error) {
    console.log("Unable to insert cricket players data into DB");
  }
};

let getCricketPlayersDataFromDB = async () => {
  let cricketPlayersArray = await cricketPlayersDetails.find();
  console.log(cricketPlayersArray);
};

app.get("/cricketplayerslist", async (req, res) => {
  let cricketPlayersArray = await cricketPlayersDetails.find();
  res.json(cricketPlayersArray);
});
app.listen(7799, () => {
  console.log("Listening to port 7799");
});

let connectedToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://govardhank:govardhank@brnstudent.z5qymfc.mongodb.net/moviesDB?retryWrites=true&w=majority&appName=brnstudent"
    );
    console.log("Successfully connected to MDB");
    insertMoviesDataIntoMDB();
    insertCricketPlayersDataIntoMDB()
    getmoviesDataFromDB();
    getCricketPlayersDataFromDB();
  } catch (error) {
    console.log("Unable to connect to MDB");
  }
};
connectedToMDB();
