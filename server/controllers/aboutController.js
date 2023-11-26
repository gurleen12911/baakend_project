// aboutController.js

exports.showAboutPage = (req, res) => {
  res.render('about', { title: 'Cooking Blog - About', body: 'About Us Content' });
};
