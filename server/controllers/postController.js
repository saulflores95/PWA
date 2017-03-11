import db from '../models';

const postController = {};

postController.post = (req, res) => {
  const {
    title,
    text,
    userId,
  } = req.body;

  const post = new db.Post({
    title,
    text,
    _creator: userId,
  });

  post.save().then(newPost => {
    return res.status(200).json({
      succes:true,
      data:newPost
    });
  }).catch((err) => {
    return res.status(500).json({
      message:err
    });
  });
};

postController.getAll = (req, res) => {
  db.Post.find({}).populate({
    path:'_creator',
    select:'username createdAt -_id'
  }).then((post) => {
    return res.status(200).json({
      succes:true,
      data:post
    });
  }).catch((err) => {
    return res.status(500).json({
      message:err
    });
  });
};

export default postController;
