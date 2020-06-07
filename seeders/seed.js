let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Beach Running",
        duration: 60,
        distance: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Swimming",
        duration: 60,
        distance: 2
      },
      {
        type: "cardio",
        name: "Walking",
        duration: 30,
        distance: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 30,
        weight: 200,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Jogging",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
