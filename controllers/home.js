/**
 * HomeController
 **/

var Geo = require('../models/Geo');

var start = (req, res) => {

  let q = req.query || {};
  let ipAddr = q.ip || q.ipAddr || q.ipAddress || '';

  let r = Geo.estimate(ipAddr);

  return res.status(200).json(r);
};

module.exports = {
  start: start
};
