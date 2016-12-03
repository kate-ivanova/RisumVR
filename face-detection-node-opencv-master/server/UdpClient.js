const dgram = require('dgram');

class UdpClient {
  constructor(port = 9082, host = '127.0.0.1') {
    this.port = port;
    this.host = host;
    this.client = dgram.createSocket('udp4');
  }
  send(message, errHandler) {
    this.client.send(message.toString(), this.port, this.host);
  }
};

module.exports = UdpClient;
