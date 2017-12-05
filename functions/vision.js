// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Creates a client
const vision = new Vision();

// The name of the image file to annotate
const fileName = './cat.jpg';
const imageUri = 'gs://fmsworkshop-42bba.appspot.com/images/target.png';

// Prepare the request object
const request = {
  source: {
    //filename: fileName
    imageUri: imageUri
  }
};

// Performs label detection on the image file
exports.helloVision = functions.https.onRequest((req,resp)=> {
  vision.labelDetection(request)
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach((label) => console.log(label.description));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
})
