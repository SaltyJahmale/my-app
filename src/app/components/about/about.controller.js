(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('chartBarController', chartBarController);

  /** @ngInject */
  function chartBarController() {
    var vm = this;

    vm.myData = new Array();
    vm.myData = [50];

    var client = mqtt.connect('tcp://0.0.0.0:9001');

    console.log()
    // client.publish('topic', 'hello')
    console.log("about controller")

    var topic = client.subscribe('topic')

    client.on('message', function (topic, message) {
      console.log(message.toString());
      client.end();
    });

    function InitChart() {
      var data = [{
      //   "temp": "17",
      //   "hours": "2000"
      // }, {
      //   "temp": "19",
      //   "hours": "2001"
      // }, {
      //   "temp": "19",
      //   "hours": "2002"
      // }, {
      //   "temp": "19",
      //   "hours": "2003"
      // }, {
      //   "temp": "19",
      //   "hours": "2004"
      // }, {
      //   "temp": "19",
      //   "hours": "2005"
      }];

      var data2 = [{
      //   "temp": "18",
      //   "hours": "2014"
      // }, {
      //   "temp": "19",
      //   "hours": "2015"
      // }, {
      //   "temp": "19",
      //   "hours": "2016"
      // }, {
      //   "temp": "19",
      //   "hours": "2018"
      // }, {
      //   "temp": "19",
      //   "hours": "2019"
      // }, {
      //   "temp": "19",
      //   "hours": "2020"
      }];

      var vis = d3.select("#visualisation"),
        WIDTH = 1000,
        HEIGHT = 500,
        MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
        },
        xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2400]),
        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([1, 100]),
        xAxis = d3.svg.axis()
          .scale(xScale),
        yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");

      vis.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);

      vis.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);

      var lineGen = d3.svg.line()
        .x(function(d) {
          return xScale(d.hours);
        })
        .y(function(d) {
          return yScale(d.temp);
        })
        .interpolate("basis");

      vis.append('svg:path')
        .attr('d', lineGen(data))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      vis.append('svg:path')
        .attr('d', lineGen(data2))
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    }
    InitChart();

  }
})();
