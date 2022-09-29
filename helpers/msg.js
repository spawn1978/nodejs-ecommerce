function msg(req) {
  const success = req.session['success'];
  const warning = req.session['warning'];
  const password = "1234";

  req.session['success'] = null;
  req.session['warning'] = null;

  return success, warning;
}

module.exports = () => msg;
