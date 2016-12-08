var cv = require('opencv');

// udp client
const UdpClient = require('../../UdpClient');

// camera properties
var camWidth = 320;
var camHeight = 240;
var camFps = 10;
var camInterval = 1000 / camFps;

// smile detection properties
var color = [0, 255, 0];
var cascadeFile = './data/haarcascade_smile.xml';

// initialize camera
var camera = new cv.VideoCapture(0);
camera.setWidth(camWidth);
camera.setHeight(camHeight);

// udpClient
const udpClient = new UdpClient();


module.exports = function (socket) {
  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;
	  smileCascade = new cv.CascadeClassifier(cascadeFile);
	  smileCascade.detectMultiScale(im, function(err, smiles) {
	  	console.log(smiles);
	  	  for (var k = 0; k < smiles.length; k++) {
	  	 	if (err) throw err;
            var smile = smiles[k];
			im.rectangle([smile.x, smile.y], [smile.width, smile.height], color, 2);
		  }
		  socket.emit('frame', { buffer: im.toBuffer() });
      const data = smiles.length ? 1 : 0;
      udpClient.send(data);
		}, 6, 14);
    });
  }, camInterval);
};



/*module.exports = function (socket) {
  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;

      im.detectObject('./data/haarcascade_smile.xml', {}, function(err, faces) {
        if (err) throw err;

        for (var i = 0; i < faces.length; i++) {
          face = faces[i];
                    console.log(face);
          if(face.x > 90 && face.x < 120 && face.y > 150){

          im.rectangle([face.x, face.y], [face.width, face.height], rectColor, rectThickness);
			}
        }

        socket.emit('frame', { buffer: im.toBuffer() });
      });
    });
  }, camInterval);
};
*/
