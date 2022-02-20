const redirects = [
  { from: '/gold/jodha_haar', to: '/gold/jodha-haar' },
  { from: '/gold/sohan_kanthi', to: '/gold/sohan-kanthi' },
  { from: '/gold/sheesh_phool', to: '/gold/sheeshphool' },
  { from: '/gold/desi_aad', to: '/gold/desi-aad' },
  { from: '/gold/mini_aad', to: '/gold/mini-aad' },
  { from: '/gold/chick_set', to: '/gold/chik-set' },
  { from: '/gold/rakhdi_set', to: '/gold/rakhdi-set' },
  { from: '/gold/ladies_ring', to: '/gold/ladies-ring' },
  { from: '/gold/gents_ring', to: '/gold/gents-ring' },
  { from: '/gold/ram_navmi', to: '/gold/ram-navmi' },
  { from: '/gold/bala+jhela', to: '/gold/bala-jhela' },
  { from: '/desi/bor', to: '/gold/rakhdi' },
  { from: '/desi/bajubandh', to: '/gold/baajubandh' },
  { from: '/silver/fancy-paayal', to: '/silver/paayal' },
  { from: '/silver/half-kandora', to: '/silver/kandora' },
  { from: '/silver/bracelate', to: '/silver/bracelet' },
  { from: '/silver/bartan', to: '/silver/utensil' },

  
];

module.exports = function (req, res, next) {
  const host = req.headers.host;
  const fullUrl = req.url;
  var url = req.url.split('?')[0];
  var urlParams = null;
  if (req.url.includes("?")) {
    urlParams = '?' + req.url.split('?')[1]
  }

  const redirect = redirects.find(r => r.from === url)
  if (redirect) {
    var newLocation;
    if (urlParams) {
      newLocation = redirect.to + urlParams;
    } else {
      newLocation = redirect.to;
    }
    res.writeHead(301, {
      Location: newLocation
    });
    res.end()
  } else {
    next()
  }
}
