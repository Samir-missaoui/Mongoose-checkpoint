const express = require("express");
const router = express.Router();
const User = require("../Prototype/person");

router.get("/getusers", (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ msg: "something went wrong " }));
});
router.get("/getusers/pizza", (req, res) => {
  User.findOne({ favoriteFoods: "Pizza" })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ msg: "something went wrong " }));
});
var id = "61b1432ad10292be30484a91";
User.findById(id, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Result : ", docs);
  }
});
User.findOne({ _id: id }, function (err, user) {
  if (err) {
    console.log(err);
  } else {
    user.favoriteFoods.push("hamburger");
    user.save((err, updated) => {
      console.log(updated);
    });
  }
});
var findAndUpdate = function (personName, done) {
  var ageToSet = 20;

  User.findOneAndUpdate(
    { name: Samir },
    { age: ageToSet },
    { new: true },
    (err, data) => {
      if (err) {
        done(err);
      }
      done(null, data);
    }
  );
};
User.findByIdAndRemove("61b1432ad10292be30484a8f", (error, deleted) => {
  if (error) {
    console.log(error);
  } else {
    console.log(deleted);
  }
});
User.remove({ name: "Mary" }, (error, deleted) => {
  if (error) {
    console.log(error);
  } else {
    console.log(deleted);
  }
});

module.exports = router;
