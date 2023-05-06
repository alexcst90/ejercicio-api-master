
const Post = require("../models/user");


//retrieve all users in a collection
exports.getAllUsers = (req, res) => {
  const users = Post.find()
    .then((users) => {
      res.status(200).json({ posts: users });
    })
    .catch((err) => console.log(err));
};

//get user using a field to find it
exports.getUserByField = (req, res) => {
  const users = Post.find(req.body)
    .then((users) => {
      res.status(200).json({ posts: users });
    })
    .catch((err) => console.log(err));
};

//create a new user method
exports.createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("Creating post: ", post);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      post: result,
    });
  });
};

exports.updateUser = async (req, res) => {
  //Extract the parameter email from urlparam
  // const email = req.params.email;
  try {
    //find a record and update
    const updateUser = await Post.findOneAndUpdate({ email: req.body.email }, req.body, {
      new: true,
    });

    //if updateUser is null, proced to create a new user and return 201 httpStatus
    if (updateUser == null) {
      const user = new Post(req.body);
      user.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        res.status(201).json({ post: result });
      });
    } else {
      //the recod was updated
      res.status(200).json(updateUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    //find a user and delete
    const deletedUser = await Post.findOneAndDelete({ email: req.body.email });
    //deleted validation if deletedUser is null, the rocord was not founded and return 204 httpStatus
    if (deletedUser == null) {
      return res.status(204).send();
    }
    res.status(200).json(deletedUser).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
