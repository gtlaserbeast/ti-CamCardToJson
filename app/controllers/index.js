var myScript = require('myscript');
console.log(myScript);
function doClick(e) {
	var options = {
    camCardUrl: 'http://bcr1.intsig.net/BCRService/BCR_VCF2',
    camCardUser: 'webmaster@jestercom.com',
		camCardPass: 'RAQH3HFLXC4HRHD5',
    camCardLang: '1',
    compression: 0.5,
    photoSend: function() {
      $.label.text = 'photo sent, waiting for data';
    }
  };
  myScript.readCard(options, function(err, data) {
    console.log(data.json);
    $.label.text = 'all done, see device log';
	});
}

$.index.open();