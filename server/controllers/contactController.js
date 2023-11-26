// contactController.js

exports.showContactPage = (req, res) => {
  res.render('contact', { title: 'Cooking Blog - Contact', body: 'Contact Us Content' });
};
