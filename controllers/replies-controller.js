const Replies = require("../models/replies-model");

createReply = (req, res) => {
  Replies.create(
    {
      text: req.body.text,
      author: req.body.author,
      like: req.body.like,
      dislike: req.body.dislike,
      comments: req.body.comments,
      topic: req.body.topic,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Reply was created successfully." });
    }
  );
};

updateReply = async (req, res) => {
  await Replies.updateOne(
    { _id: req.body.id },
    {
      text: req.body.text,
      author: req.body.author,
      like: req.body.like,
      dislike: req.body.dislike,
      comments: req.body.comments,
      topic: req.body.topic,
    },
    (err, reply) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: reply });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getReplies = async (req, res) => {
  await Replies.find(req.query, (err, reply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!reply) {
      return res.status(404).json({ success: false, error: "Reply not found" });
    }
    return res.status(200).json({ success: true, data: reply });
  })
    .clone()
    .catch((err) => console.error(err));
};

getLastDate = async (req, res) => {
  await Replies.find(req.query, (err, reply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!reply) {
      return res.status(404).json({ success: false, error: "Reply not found" });
    }

    const date = new Date(
      Math.max.apply(
        null,
        reply.map(function (e) {
          return new Date(e.createdAt);
        })
      )
    );
    return res.status(200).json({ success: true, data: date });
  })
    .clone()
    .catch((err) => console.error(err));
};

getTopReplies = async (req, res) => {
  await Replies.find(req.query, (err, reply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!reply) {
      return res.status(404).json({ success: false, error: "Reply not found" });
    }

    let data = reply.sort((a, b) => {
      return b.like.length - a.like.length;
    });

    return res.status(200).json({ success: true, data: data });
  })
    .clone()
    .catch((err) => console.error(err));
};

getLatestReplies = async (req, res) => {
  await Replies.find(req.query, (err, reply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!reply) {
      return res.status(404).json({ success: false, error: "Reply not found" });
    }

    let data = reply.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return res.status(200).json({ success: true, data: data });
  })
    .clone()
    .catch((err) => console.error(err));
};

deleteReply = async (req, res) => {
  await Replies.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Reply was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createReply,
  getReplies,
  updateReply,
  deleteReply,
  getLastDate,
  getTopReplies,
  getLatestReplies
};
