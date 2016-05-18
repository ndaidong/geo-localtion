/**
 * Geo model
 **/

var fs = require('fs');
var ip = require('ip');
var geoip = require('geoip-lite');

var countries = (() => {
  let cs = [];
  let txt = fs.readFileSync('./data/countries.txt', 'utf8');
  let a1 = txt.split('\n');
  a1.forEach((line) => {
    let a2 = line.split(',');
    cs.push({
      alias: a2[0],
      name: a2[1]
    });
  });
  return cs;
})();

var getCountry = (code) => {
  let n = '';
  for (let i = 0; i < countries.length; i++) {
    let c = countries[i];
    if (c.alias === code) {
      n = c.name;
      break;
    }
  }
  return n;
};

var estimate = (ipAddr) => {

  let r = {};

  if (!ipAddr) {
    r.error = 1;
    r.message = 'Missing IP address. Please add parameter "?ip=IP_ADDRESS" to see the result';
  } else if (!ip.isV4Format(ipAddr)) {
    r.error = 1;
    r.message = 'Invalid IP address.';
  } else {

    let geo = geoip.lookup(ipAddr);
    if (geo) {
      let code = geo.country;
      r = {
        IP: ipAddr,
        lat: geo.ll[0],
        long: geo.ll[1],
        countryCode: code,
        country: getCountry(code),
        city: geo.city
      };
    }
  }

  return r;
};

module.exports = {
  estimate: estimate
};
