(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ChartBarController', ChartBarController);

  /** @ngInject */
  function ChartBarController($scope, DataService) {

    var vm = this;

    /**
     * add a data node
     */
    $scope.addNode = function () {

      vm.text = [];

      vm.dataInArray = DataService.query('http://localhost:8080/data/'+$scope.text).get(function () {
        JSON.stringify(vm.dataInArray);
        angular.forEach(vm.dataInArray, function (value) {
          vm.text.push(value.inputData);
        })
      });

      addDataSet(myNewChart, $scope.text, vm.text);

    };


    /**
     * stop and remove data
     */
    $scope.removeArrayData = function () {

      dataChart.datasets.splice(0);
      dataChart.datasets.forEach(function (dataset) {
        dataset.data.splice(0);
      });

    };


    /**
     * Draw the graph
     * @type {Element}
     */
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");

    var dataChart = {
      labels: ["", "", "", "", "", "", ""],
      datasets: []
    };


    var settings = {
      type: "line",
      data: dataChart
    };

    var myNewChart = new Chart(ctx, settings);


    /**
     * add data to the graph
     * @param chart
     * @param label
     */
    function addData(chart, label) {
      chart.data.labels.push(label);
      chart.update();

    }

    /**
     * add dataset to the graph
     * @param chart
     * @param label
     * @param data
     */
    function addDataSet(chart, label, data) {
      chart.data.datasets.push({
        label: label,
        data: data
      });

      chart.update();
    }

    /**
     * remove the first data from the graph
     * @param chart
     */
    function removeData(chart) {
      chart.data.labels.shift();
      chart.data.datasets.forEach(function (dataset) {
        dataset.data.shift();
      });
      chart.update();
    }

    /**
     * Refresh rate graph
     */
    setInterval(function () {
      var d = new Date();
      // Add data to data set
      addData(myNewChart, d.toLocaleTimeString());
      // Remove the first point so we dont just add values forever
      removeData(myNewChart);
      }, 5000);

  }
})();
