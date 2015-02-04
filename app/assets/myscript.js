var ImageFactory = require('ti.imagefactory');
var vCard = require('ti-vcard');
function takePhoto(cb) {
  Titanium.Media.showCamera({
    success: function(e) {
      if (e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
        var image = e.media;
        cb(null, image);
      }
    },
    cancel: function(e) {
      cb(e);
    },
    error: function(e) {
      cb(e);
    },
    saveToPhotoGallery: true,
    allowEditing: false,
    autohide: true,
    showControls: true,
    mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
  });
}
exports.readCard = readCard;

function readCard(options, callback) {
  if (!options.camCardUrl) {
    return callback('camCardUrl required');
  }
  takePhoto(function(err, img) {
    if (err) {
      callback(err);
    } else {
      
      var image = ImageFactory.compress(img, options.compression || 0.5);
      var resized = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'resized.jpg')
      resized.write(image);
      var form = {};
      form["resized.jpg"] = resized;
      var xhr = Ti.Network.createHTTPClient({
        onload: function() {
          var card = new vCard();
          console.log(this.responseText);
          card.readData(this.responseText, function(err, json) {
            //all done here. send a callback with output
            callback(err, {
              file: resized,
              json: json
            });
            image = null;
            resized = null;
          });
        },
        onerror: function(e) {
          console.error(e);
          console.error(this.responseText);
          //all done here. send a callback with output
          //first argument error/null, second argument json
          callback(e);
          image = null;
          resized = null;
        }
      });
      var postUrl = options.camCardUrl + "?PIN=&user=" + options.camCardUser + "&pass=" + options.camCardPass + "&lang=" + options.camCardLang + "&size=" + resized.size;
      xhr.open("POST", postUrl);
      xhr.send(form["resized.jpg"]);
      if (options.photoSend) {
        options.photoSend();
      }
    }
  })

}