var data = d3.json('classData.json').then(function(data){

    initialize(data,0,14);
    // update(data,0,0);
});

var update = function(data,day,student){


  var quizAverage= function(data,day,student){
    return data[student].quizes[day].grade/data[student].quizes[day].max;
  };

  var homeworkAverage = function(data,day,student){
    return data[student].homework[day].grade/data[student].homework[day].max;
  };

  var testAverage = function(data,day,student){
    return data[student].test[day].grade/data[student].test[day].max;
  };
  var finalAverage = function(data,day,student){
    return data[student].final[day].grade/data[student].final[day].max;
  };

  var averages = [
    {day:1,
    grades:quizAverage(data,0,student)},
    {day:2,
    grades:(quizAverage(data,1,student)+
             homeworkAverage(data,0,student))/2},
    {day:3,
    grades:quizAverage(data,2,student)},
    {day:4,
    grades:(quizAverage(data,3,student)+
             homeworkAverage(data,1,student))/2},
    {day:5,
    grades:quizAverage(data,4,student)},
    {day:6,
    grades:(quizAverage(data,5,student)+
             homeworkAverage(data,2,student))/2},
    {day:7,
    grades:quizAverage(data,6,student)},
    {day:8,
    grades:(quizAverage(data,7,student)+
             homeworkAverage(data,3,student))/2},
    {day:9,
    grades:quizAverage(data,8,student)},
    {day:10,
    grades:(quizAverage(data,9,student)+
             homeworkAverage(data,4,student))/2},
    {day:11,
    grades:quizAverage(data,10,student)},
    {day:12,
    grades:(quizAverage(data,11,student)+
             homeworkAverage(data,5,student))/2},
    {day:13,
    grades:quizAverage(data,12,student)},
    {day:14,
    grades:(quizAverage(data,13,student)+
             homeworkAverage(data,6,student))/2},
    {day:15,
    grades:testAverage(data,0,student)},
    {day:16,
    grades:(quizAverage(data,14,student)+
             homeworkAverage(data,7,student))/2},
    {day:17,
    grades:quizAverage(data,15,student)},
    {day:18,
    grades:(quizAverage(data,16,student)+
             homeworkAverage(data,8,student))/2},
    {day:19,
    grades:quizAverage(data,17,student)},
    {day:20,
    grades:(quizAverage(data,18,student)+
             homeworkAverage(data,9,student))/2},
    {day:21,
    grades:quizAverage(data,19,student)},
    {day:22,
    grades:(quizAverage(data,20,student)+
             homeworkAverage(data,10,student))/2},
    {day:23,
    grades:quizAverage(data,21,student)},
    {day:24,
    grades:(quizAverage(data,22,student)+
             homeworkAverage(data,11,student))/2},
    {day:25,
    grades:quizAverage(data,23,student)},
    {day:26,
    grades:(quizAverage(data,24,student)+
             homeworkAverage(data,12,student))/2},
    {day:27,
    grades:quizAverage(data,25,student)},
    {day:28,
    grades:(quizAverage(data,26,student)+
             homeworkAverage(data,13,student))/2},
    {day:29,
    grades:quizAverage(data,27,student)},
    {day:30,
    grades:testAverage(data,1,student)},
    {day:31,
    grades:quizAverage(data,28,student)},
    {day:32,
    grades:(quizAverage(data,29,student)+
             homeworkAverage(data,14,student))/2},
    {day:33,
    grades:quizAverage(data,30,student)},
    {day:34,
    grades:(quizAverage(data,31,student)+
             homeworkAverage(data,15,student))/2},
    {day:35,
    grades:quizAverage(data,32,student)},
    {day:36,
    grades:(quizAverage(data,33,student)+
             homeworkAverage(data,16,student))/2},
    {day:37.,
    grades:quizAverage(data,34,student)},
    {day:38,
    grades:(quizAverage(data,35,student)+
             homeworkAverage(data,17,student))/2},
    {day:39,
    grades:quizAverage(data,36,student)},
    {day:40,
    grades:(quizAverage(data,37,student)+
             homeworkAverage(data,18,student))/2},
    {day:41,
    grades:finalAverage(data,0,student)}
  ];


  var svgwidth= window.innerWidth*0.8;
  var svgheight= window.innerHeight*0.65;

  var margins =
  {
    top:20,
    bottom:20,
    left:50,
    right:50
  }

  var width = svgwidth -margins.left - margins.right;
  var height = svgheight -margins.top - margins.bottom;

  linexScale = d3.scaleLinear()
                 .domain([0,41])
                 .range([0,width]);

  lineyScale = d3.scaleLinear()
                 .domain([0,1])
                 .range([height,0]);

  var linemake = d3.line()
                   .x(function(d){return linexScale(d.day);})
                   .y(function(d){return lineyScale(d.grades);});

  var areamake = d3.area()
                   .x(function(d){return linexScale(d.day)})
                   .y0(function(d){return lineyScale(0)})
                   .y1(function(d){return lineyScale(d.grades)})
  var svg = d3.select('.one');

  var line = svg.select('.line');

  var area = svg.select('.area');

  line.datum(averages).transition().duration(1000).attr('d',linemake)
  .attr('transform','translate('+(margins.left)+","+margins.top+')');

  area.datum(averages).transition().duration(1000).attr('d',areamake)
  .attr('transform','translate('+(margins.left)+","+margins.top+')');

}

var initialize = function(data, day, student){

  var svgwidth= window.innerWidth*0.8;
  var svgheight= window.innerHeight*0.65;

  var margins =
  {
    top:20,
    bottom:20,
    left:50,
    right:50
  }

  var width = svgwidth -margins.left - margins.right;
  var height = svgheight -margins.top - margins.bottom;

  var svg = d3.select('.one')
              .attr('width',svgwidth)
              .attr('height',svgheight);

  var quizAverage= function(data,day,student){
    return data[student].quizes[day].grade/data[student].quizes[day].max;
  };

  var homeworkAverage = function(data,day,student){
    return data[student].homework[day].grade/data[student].homework[day].max;
  };

  var testAverage = function(data,day,student){
    return data[student].test[day].grade/data[student].test[day].max;
  };
  var finalAverage = function(data,day,student){
    return data[student].final[day].grade/data[student].final[day].max;
  };

  var averages = [
    {day:1,
    grades:quizAverage(data,0,student)},
    {day:2,
    grades:(quizAverage(data,1,student)+
             homeworkAverage(data,0,student))/2},
    {day:3,
    grades:quizAverage(data,2,student)},
    {day:4,
    grades:(quizAverage(data,3,student)+
             homeworkAverage(data,1,student))/2},
    {day:5,
    grades:quizAverage(data,4,student)},
    {day:6,
    grades:(quizAverage(data,5,student)+
             homeworkAverage(data,2,student))/2},
    {day:7,
    grades:quizAverage(data,6,student)},
    {day:8,
    grades:(quizAverage(data,7,student)+
             homeworkAverage(data,3,student))/2},
    {day:9,
    grades:quizAverage(data,8,student)},
    {day:10,
    grades:(quizAverage(data,9,student)+
             homeworkAverage(data,4,student))/2},
    {day:11,
    grades:quizAverage(data,10,student)},
    {day:12,
    grades:(quizAverage(data,11,student)+
             homeworkAverage(data,5,student))/2},
    {day:13,
    grades:quizAverage(data,12,student)},
    {day:14,
    grades:(quizAverage(data,13,student)+
             homeworkAverage(data,6,student))/2},
    {day:15,
    grades:testAverage(data,0,student)},
    {day:16,
    grades:(quizAverage(data,14,student)+
             homeworkAverage(data,7,student))/2},
    {day:17,
    grades:quizAverage(data,15,student)},
    {day:18,
    grades:(quizAverage(data,16,student)+
             homeworkAverage(data,8,student))/2},
    {day:19,
    grades:quizAverage(data,17,student)},
    {day:20,
    grades:(quizAverage(data,18,student)+
             homeworkAverage(data,9,student))/2},
    {day:21,
    grades:quizAverage(data,19,student)},
    {day:22,
    grades:(quizAverage(data,20,student)+
             homeworkAverage(data,10,student))/2},
    {day:23,
    grades:quizAverage(data,21,student)},
    {day:24,
    grades:(quizAverage(data,22,student)+
             homeworkAverage(data,11,student))/2},
    {day:25,
    grades:quizAverage(data,23,student)},
    {day:26,
    grades:(quizAverage(data,24,student)+
             homeworkAverage(data,12,student))/2},
    {day:27,
    grades:quizAverage(data,25,student)},
    {day:28,
    grades:(quizAverage(data,26,student)+
             homeworkAverage(data,13,student))/2},
    {day:29,
    grades:quizAverage(data,27,student)},
    {day:30,
    grades:testAverage(data,1,student)},
    {day:31,
    grades:quizAverage(data,28,student)},
    {day:32,
    grades:(quizAverage(data,29,student)+
             homeworkAverage(data,14,student))/2},
    {day:33,
    grades:quizAverage(data,30,student)},
    {day:34,
    grades:(quizAverage(data,31,student)+
             homeworkAverage(data,15,student))/2},
    {day:35,
    grades:quizAverage(data,32,student)},
    {day:36,
    grades:(quizAverage(data,33,student)+
             homeworkAverage(data,16,student))/2},
    {day:37.,
    grades:quizAverage(data,34,student)},
    {day:38,
    grades:(quizAverage(data,35,student)+
             homeworkAverage(data,17,student))/2},
    {day:39,
    grades:quizAverage(data,36,student)},
    {day:40,
    grades:(quizAverage(data,37,student)+
             homeworkAverage(data,18,student))/2},
    {day:41,
    grades:finalAverage(data,0,student)}
  ];

  console.table(averages,["day","grades"])

  linexScale = d3.scaleLinear()
                 .domain([0,41])
                 .range([0,width]);

  lineyScale = d3.scaleLinear()
                 .domain([0,1])
                 .range([height,0]);

  var linemake = d3.line()
                   .x(function(d){return linexScale(d.day);})
                   .y(function(d){return lineyScale(d.grades);});

  var areamake = d3.area()
                   .x(function(d){return linexScale(d.day)})
                   .y0(function(d){return lineyScale(0)})
                   .y1(function(d){return lineyScale(d.grades)});

  svg.append('path')
     .datum(averages)
     .classed('line',true)
     .attr('d',linemake)
     .attr('transform','translate('+(margins.left)+","+margins.top+')');

  svg.append('path')
        .datum(averages)
        .classed('area',true)
        .attr('d',areamake)
        .attr('transform','translate('+(margins.left)+","+margins.top+')');

  var yAxis = d3.axisLeft(lineyScale);

  svg.append('g').classed('yAxis',true)
     .call(yAxis)
     .attr('transform','translate('+(margins.left)+","+margins.top+')');

  var xAxis = d3.axisBottom(linexScale).ticks(41);

  svg.append('g').classed('xAxis',true)
     .call(xAxis)
     .attr("transform", "translate("+(margins.left)+","+(margins.top+height)+")");


  var selectorBar = d3.select('.students');

  selectorBar.selectAll('img').data(data).enter()
             .append('img')
             .attr("src",function(d,i){
               return d.picture;
             })
             .style('clear','right')
             .on('click',function(d,i){
               console.log('student: '+i)
               update(data,0,i);})

}
