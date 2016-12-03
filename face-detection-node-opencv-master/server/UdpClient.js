const dgram = require('dgram');

class UdpClient {
  constructor(port = 55056, host = 'localhost') {
    this.port = port;
    this.host = host;
    this.client = dgram.createSocket('udp4');
  }
  send(message, errHandler) {
    this.client.send((message >>> 0).toString(2), this.port, this.host);
  }
};

module.exports = UdpClient;
