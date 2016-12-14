var md5 = require('js-md5');

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  var plainEmail = url.replace("http://", "");
  var gravatarSrc = "https://www.gravatar.com/avatar/";
  var gravatarEmail = md5(plainEmail);
  var html = '<a href="mailto:' + plainEmail + '"><img src="' + gravatarSrc + gravatarEmail + '?s=100&d=retro" alt="Email ' + plainEmail + '" style="border: 1px solid #000; border-radius: 50%;" /></a>';
  res.json({
    body: html
  });

};