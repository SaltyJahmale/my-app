(function () {
  'use strict';

  angular
    .module('myApp')
    .config(mqttProvider);

  function mqttProvider() {

    // var client = new Messaging.Client(hostname, port, clientId);

    // var client = mqtt.connect('mqtt://test.mosquitto.org');

    // var option = {
    //
    //   timeout: 3,
    //   onSucces: function () {
    //     alert("Connected");
    //   },
    //   onFailure: function (message) {
    //     alert("Failure" + message);
    //   }
    // };
    //
    // client.connect(option);

    // client.on('connect', function () {
    //   client.subscribe('presence')
    //   client.publish('presence', 'Hello mqtt')
    // })
    //
    // client.on('message', function (topic, message) {
    //   // message is Buffer
    //   console.log(message.toString())
    //   client.end()
    // })
  }
})();
