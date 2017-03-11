var less = require('less');
var fs = require('fs')

fs.readFile('app/assets/stylesheets/main.less', 'utf8', function(err, data) {
  less.render(
    data,
    {
      paths: [
        'app/assets/stylesheets',
        'vendor/assets/stylesheets'
      ]
    }
  , function(e, result) {
    console.log(result.css);
  });
})