const Topics = require("../models/topics-model");

createTopic = (req, res) => {
  Topics.create(
    {
      title: req.body.title,
      author: req.body.author,
      topic: req.body.topic,
      category: req.body.category,
      tags: req.body.tags,
      image: req.body.image,
      like: req.body.like,
      dislike: req.body.dislike,
      comments: req.body.comments,
      vote_yes: req.body.vote_yes,
      vote_no: req.body.vote_no,
      vote_more: req.body.vote_more,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Topic was created successfully." });
    }
  );
};

updateTopic = async (req, res) => {
  await Topics.updateOne(
    { _id: req.body.id },
    {
      title: req.body.title,
      author: req.body.author,
      topic: req.body.topic,
      category: req.body.category,
      tags: req.body.tags,
      image: req.body.image,
      like: req.body.like,
      dislike: req.body.dislike,
      comments: req.body.comments,
      vote_yes: req.body.vote_yes,
      vote_no: req.body.vote_no,
      vote_more: req.body.vote_more,
    },
    (err, topic) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: topic });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getTopics = async (req, res) => {
  await Topics.find(req.query, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!topic) {
      return res.status(404).json({ success: false, error: "Topic not found" });
    }
    return res.status(200).json({ success: true, data: topic });
  })
    .clone()
    .catch((err) => console.error(err));
};

deleteTopic = async (req, res) => {
  await Topics.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Topic was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

getTopTopics = async (req, res) => {
  await Topics.find(req.query, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!topic) {
      return res.status(404).json({ success: false, error: "topic not found" });
    }

    let data = topic.sort((a, b) => {
      return b.like.length - a.like.length;
    });

    return res.status(200).json({ success: true, data: data });
  })
    .clone()
    .catch((err) => console.error(err));
};

getLatestTopics = async (req, res) => {
  await Topics.find(req.query, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!topic) {
      return res.status(404).json({ success: false, error: "topic not found" });
    }

    let data = topic.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return res.status(200).json({ success: true, data: data });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createTopic,
  getTopics,
  updateTopic,
  deleteTopic,
  getTopTopics,
  getLatestTopics,
};
