var data = d3.json('classData.json').then(function(data){

    initialize(data);
    update(data,0,0);
});

var initialize = function(data, day, student){

  var svgwidth= window.innerWidth*0.8;
  var svgheight= window.innerHeight*0.65;

  var svg = d3.select('.one')
              .attr('width',svgwidth)
              .attr('height',svgheight);



  var averages = [
    {"day":1
    "grades":[]}
    {"day":2
    "grades":[]}
    {"day":3
    "grades":[]}
    {"day":4
    "grades":[]}

  ]

  for()



  }
  var dayfinal = data[student].final.map(function(d){

  })


}
