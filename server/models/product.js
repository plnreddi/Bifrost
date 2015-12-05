module.exports = function(Product) {
  Product.findByIds = function(ids, cb) {
      var products = [];
    for (var i = 0; i < ids.length; i++) {
      Product.findById(ids[i], function(err, product) {
        if (err) return cb(err);
          products.add(product);

        cb(products, true);
      });
    }
  };
  Product.remoteMethod('findByIds', {
    accepts: [{
      arg: 'ids',
      type: 'array'
    } ],
    returns: {
      root: true,
      type: 'array'
    },
    http: {
      path: '/findByIds',
      verb: 'get'
    }
  });
};
