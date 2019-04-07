var data = d3.json('classData.json').then(function(data){

    initialize(data,0,1);
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


  var svgwidth= window.innerWidth*0.79;
  var svgheight= window.innerHeight*0.9;

  var margins =
  {
    top:5,
    bottom:50,
    left:80,
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
                   .y(function(d){return lineyScale(d.grades);})
                   .curve(d3.curveCatmullRom);

  var areamake = d3.area()
                   .x(function(d){return linexScale(d.day)})
                   .y0(function(d){return lineyScale(0)})
                   .y1(function(d){return lineyScale(d.grades)})
                   .curve(d3.curveCatmullRom);

  var svg = d3.select('.one');

  var line = svg.select('.line');

  var area = svg.select('.area');

  line.datum(averages).transition().duration(1000).attr('d',linemake)
  .attr('transform','translate('+(margins.left)+","+margins.top+')');

  // area.datum(averages).transition().duration(1000).attr('d',areamake)
  // .attr('transform','translate('+(margins.left)+","+margins.top+')');

}

var initialize = function(data, day, student){

  var svgwidth= window.innerWidth*0.79;
  var svgheight= window.innerHeight*0.9;

  var margins =
  {
    top:5,
    bottom:50,
    left:80,
    right:50
  }

  var width = svgwidth -margins.left - margins.right;
  var height = svgheight -margins.top - margins.bottom;

  var svg = d3.select('.one')
              .attr('width',svgwidth)
              .attr('height',svgheight);

  var legendwidth = window.innerWidth*0.14;

  var legend = d3.select('.two')
              .attr('height',svgheight)
              .attr('width',legendwidth);


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

  var returnAverage = function(data,student){

        return [
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
  }

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

  var classData = [

    returnAverage(data,0),
    returnAverage(data,1),
    returnAverage(data,2),
    returnAverage(data,3),
    returnAverage(data,4),
    returnAverage(data,5),
    returnAverage(data,6),
    returnAverage(data,7),
    returnAverage(data,8),
    returnAverage(data,9),
    returnAverage(data,10),
    returnAverage(data,11),
    returnAverage(data,12),
    returnAverage(data,13),
    returnAverage(data,14),
    returnAverage(data,15),
    returnAverage(data,16),
    returnAverage(data,17),
    returnAverage(data,18),
    returnAverage(data,19),
    returnAverage(data,20),
    returnAverage(data,21),
    returnAverage(data,22)
  ]

  console.log(classData)

  linexScale = d3.scaleLinear()
                 .domain([0,41])
                 .range([0,width]);

  lineyScale = d3.scaleLinear()
                 .domain([0,1])
                 .range([height,0]);

  var linemake = d3.line()
                   .x(function(d){return linexScale(d.day);})
                   .y(function(d){return lineyScale(d.grades);})
                   .curve(d3.curveCatmullRom);

  var areamake = d3.area()
                   .x(function(d){return linexScale(d.day)})
                   .y0(function(d){return lineyScale(0)})
                   .y1(function(d){return lineyScale(d.grades)})
                   .curve(d3.curveCatmullRom);


     // .style('stroke',function(d){
     //   return d3.interpolatePiYG(d);
     // });
     // .curve(d3.curveCatmullRom);

  // svg.append('path')
  //       .datum(averages)
  //       .classed('area',true)
  //       .attr('d',areamake)
  //       .attr('transform','translate('+(margins.left)+","+margins.top+')');
  //       // .curve(d3.curveCatmullRom);

  var yAxis = d3.axisLeft(lineyScale);

  svg.append('g').classed('specificYaxis',true)
     .classed('hidden',true)
     .call(yAxis)
     .attr('transform','translate('+(margins.left)+","+margins.top+')');

  var xAxis = d3.axisBottom(linexScale).ticks(41);

  svg.append('g').classed('xAxis',true)
     .call(xAxis)
     .attr("transform", "translate("+(margins.left)+","+(margins.top+height)+")");

  var xLabel = ['Class Day'];

  svg.selectAll('.xLabel').data(xLabel).enter().append('text')
     .classed('xLabel',true)
     .attr('x',function(d){
       return svgwidth/2;
     })
     .attr('y',function(d){
       return svgheight-5;
     })
     .text('Class Day')
     .style('fill','white')
     .style('font-family','Dosis');

  var yLabel = [0];

  svg.selectAll('.yLabel').data(yLabel).enter().append('text')
     .classed('yLabel',true)
     .classed('hidden',true)
     .attr('x',function(d){
       return 5;
     })
     .attr('y',function(d){
       return svgheight/2-16;
     })
     .text('Grade')
     .style('fill','white')
     .style('font-family','Dosis');



  var selectorBar = d3.select('.students');

  var itdist = height/23;

  var imheight = svgheight/25;
  console.log('window: '+svgheight)

  selectorBar.selectAll('img').data(data).enter()
             .append('img')
             .attr("src",function(d,i){
               return d.picture;
             })
             .classed('clicked',false)
             .style('clear','right')
             .style('height',function(d){

                return imheight+'px';

              })
             .on('click',function(d,i){

               d3.select(this).classed('clicked', !d3.select(this).classed("clicked"));

               var clicked = d3.select(this).classed('clicked');

               console.log(clicked)

               d3.selectAll('img').classed('clicked',false);
               d3.select(this).classed('clicked',clicked);


               if(clicked){

                 d3.selectAll('.triangle').classed('hidden',true);
                 d3.selectAll('img').style('height',function(d){

                    return imheight+'px';

                  });
                 d3.selectAll('img').style('border-style','none')
                                .style('border-width','0px')
                                .style('border-color','white');
                 d3.select(this).style('height','7%');

                 d3.select('.specificYaxis').classed('hidden',false);
                 d3.select('.grid').classed('hidden',true);
                 d3.select('.line').classed('hidden',false);

                 d3.select(this).style('border-style','outset')
                                .style('border-width','5px')
                                .style('border-color','red')

                 d3.select('.yLabel').classed('hidden',false);

               }
               if(!clicked){

                 d3.selectAll('.triangle').classed('hidden',false);
                 d3.selectAll('img').style('height',function(d){

                    return imheight+'px';

                  });
                 d3.selectAll('img').style('border-style','none')
                                .style('border-width','0px')
                                .style('border-color','white');
                 d3.select(this).style('height',function(d){

                    return imheight+'px';

                  });



                 d3.select('.specificYaxis').classed('hidden',true);
                 d3.select('.grid').classed('hidden',false);
                 d3.select('.line').classed('hidden',true);

                 d3.select('.yLabel').classed('hidden',true);


               }
               update(data,0,i);


             })
             .on('mouseover',function(d,i){

               // d3.select(this).style('cursor','pointer').transition().duration(500)
               //                .style('height','7%');

               d3.select(this).style('cursor','pointer').style('box-shadow','0px 0px 5px black')



               var lineclicked = !d3.select('.line').classed('hidden');
               var clicked = d3.select(this).classed('clicked');

               if(lineclicked){d3.selectAll('.triangle').style('opacity','0');
                    if(clicked){d3.selectAll('.triangle'+i).style('opacity','1');}

               }
               else{
                 d3.selectAll('.triangle').style('opacity','0.2');
                 d3.selectAll('.triangle'+i).style('opacity','1');
               }



             })
             .on('mouseout',function(d,i){

               // d3.select(this).transition().duration(500).style('height','4.1%');

               d3.select(this).style('box-shadow','0px 0px 0px black');
               d3.selectAll('.triangle').style('opacity','1');

               // d3.select(this).classed('clicked', !d3.select(this).classed("clicked"));

               var lineclicked = !d3.select('.line').classed('hidden');

               if(lineclicked){d3.selectAll('.triangle').style('opacity','0');}
               else{
                 d3.selectAll('.triangle').style('opacity','1');
                 d3.selectAll('.triangle'+i).style('opacity','1');
               }
             })

 specificyScale = d3.scaleLinear()
                .domain([0,23])
                .range([height,0]);


 function make_y_gridlines() {
        return d3.axisLeft(specificyScale)
            .ticks(23);
 }

 var yAxislines = svg.append('g').classed('grid',true)
       .call(make_y_gridlines().tickSize(-width-300).tickFormat(""))
       .classed('hidden',false)
       .attr("transform", "translate("+(-100)+","+(0)+")");




// var upTri = d3.symbol().type(d3.symbolTriangle).size((height/23)*4);

// var upTri = d3.arc().innerRadius(5).outerRadius(10).startAngle(5.5).endAngle(7.07);


var lineData = [{'x':-7, 'y':7},{'x':0,'y':0},{'x':7,'y':7}]

var upTri = d3.line().x(function(d) { return d.x; })
                     .y(function(d) { return d.y; });




var colorscale = d3.interpolateHslLong('#ffa777','#59f9a1');

var rowTrimake = function(data,student){

  svg.selectAll('.triangle'+student)
        .data(data[student])
        .enter()
        .append('path')
        .attr('d',upTri(lineData))
        .classed('triangle',true)
        .classed('hidden',false)
        .classed('triangle'+student,true)
        .attr('fill',function(d,i){

            // console.log(colorscale(d.grade));

            return 'none';


        })
        .style('stroke',function(d,i){
          return d3.interpolatePiYG(d.grades);
        })
        .style('stroke-width','3')
        .attr('transform',function(d,i){
          var prevgrade = 0.6;
          // console.log("prevday:"+(i-1))
          if((i-1)>=0){
            prevgrade=data[student][(i-1)].grades;
          }
          // console.log(prevgrade)
          var difference = d.grades-prevgrade;
          if(difference>0){
            return 'translate('+(margins.left+linexScale(d.day))+','+(11+student*itdist)+")";
          }
          else if (difference<0) {
            return 'translate('+(margins.left+linexScale(d.day))+','+(16+student*itdist)+")" +" rotate(180)";
          }
          else{
            return 'translate('+(margins.left+linexScale(d.day)+3)+','+(12+student*itdist)+")"+ " rotate(90)";
          }




        });

}

rowTrimake(classData,0);
rowTrimake(classData,1);
rowTrimake(classData,2);
rowTrimake(classData,3);
rowTrimake(classData,4);
rowTrimake(classData,5);
rowTrimake(classData,6);
rowTrimake(classData,7);
rowTrimake(classData,8);
rowTrimake(classData,9);
rowTrimake(classData,10);
rowTrimake(classData,11);
rowTrimake(classData,12);
rowTrimake(classData,13);
rowTrimake(classData,14);
rowTrimake(classData,15);
rowTrimake(classData,16);
rowTrimake(classData,17);
rowTrimake(classData,18);
rowTrimake(classData,19);
rowTrimake(classData,20);
rowTrimake(classData,21);
rowTrimake(classData,22);

svg.append('path')
   .datum(averages)
   .classed('line',true)
   .classed('hidden',true)
   .attr('d',linemake)
   .attr('transform','translate('+(margins.left)+","+margins.top+')');

// legend
var gradescale = [1,0.8,0.6,0.4,0.2,0];

var legendheight = svgheight/20;
legend.selectAll('rect').data(gradescale).enter()
      .append('rect')
      .classed('hidden',false)
      .attr('x',function(d){
        return legendwidth/2;
      })
      .attr('y',function(d,i){

        return i*50+300;

      })
      .attr('width',legendheight)
      .attr('height',legendheight)
      .attr('fill',function(d){

        return d3.interpolatePiYG(d);

      });

  legend.selectAll('.colortext').data(gradescale).enter()
        .append('text')
        .classed('hidden',false)
        .attr('x',function(d){
          return legendwidth/2-50;
        })
        .attr('y',function(d,i){
          return i*50+320;
        })
        .text(function(d){

          return d*100+"%";
        })
        .attr('fill','white')
        .style('font-family','Dosis');

  var tridata = ['0','-30','60'];
  var legendupTri = d3.symbol().type(d3.symbolTriangle).size(150);

  legend.selectAll('.legendTri')
        .data(tridata)
        .enter()
        .append('path')
        .attr('d',legendupTri)
        .classed('hidden',false)
        .attr('fill',function(d){
          return 'white'
        })
        .attr('transform',function(d,i){

            return 'translate('+(legendwidth/2-70)+','+(i*50+150)+")"+' rotate('+(d)+')';

        });

legend.selectAll('.tritext').data(tridata).enter()
      .append('text')
      .classed('hidden',false)
      .attr('x',function(d){
        return legendwidth/2-30;
      })
      .attr('y',function(d,i){
        return i*50+150;
      })
      .text(function(d,i){

        if(i==0){return "Grade Increase"}
        if(i==1){return 'No Change'}
        else{return "Grade Decrease"}
      })
      .attr('fill','white')
      .style('font-family','Dosis');


var tit = ['Daily Average','Grades','Interactive','Visualization'];

legend.selectAll('.title').data(tit).enter().append('text')
      .classed('hidden',false)
      .attr('x',function(d){
        return 5;
      })
      .attr('y',function(d,i){
        return 30+i*30;
      })
      .text(function(d){
        return d;
      })
      .attr('fill','white')
      .style('font-family','Dosis')
      .style('font-size','2em');


}
