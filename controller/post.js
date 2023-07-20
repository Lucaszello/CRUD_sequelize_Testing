const Post = require("../modals/modal");

exports.renderHompage = (req, res) => {
  Post.findAll()
    .then((users) => res.render("home", { section: "home", users }))
    .catch((err) => console.log(err));
};

exports.renderAddPost = (req, res) => {
  res.render("addPost", { section: "addPost" });
};

//setPost
exports.renderSetAddPost = (req, res) => {
  const { title, description } = req.body;
  Post.create({
    title,
    description,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

//detail
exports.renderDetail = (req, res) => {
  const id = req.params.id;
 Post.findByPk(id).then(users => res.render("detail",{section : "This is detail",users})).catch(err => console.log(err))
};
