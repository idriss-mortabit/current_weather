var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/api/postweather', (req, res)=> {
  const city =  req.query.city
  var cityWeather
  //console.log("heyyyy city", city)
  if(city!=undefined){
    const url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=477c1146920651a7f08c17a62d21a21f'
    new Promise((resolve, reject)=>{
      http.request(url, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        resolve(chunk)
      });
    }).end();
  }).then((results) => {
    res.send(results)
  }
  )
}else{
  console.log("heyyyy city", city)
  const error={
    error:'city is undefined'
  }
  res.send(error)
}

});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
