const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});



// Performs label detection on the image file
exports.helloVision = functions.https.onRequest((req,resp)=> {
    // Imports the Google Cloud client library
    const Vision = require('@google-cloud/vision');

    // Creates a client
    const vision = new Vision();

    // The name of the image file to annotate
    const fileName = './cat.jpg';
    const imageUri = 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg';

    // Prepare the request object
    const request = {
    source: {
        //filename: fileName
        imageUri: imageUri
    }
    };
    
  vision.labelDetection(request)
  .then((results) => {
    const labels = results[0].labelAnnotations;
    var a="";
    //console.log('Labels:');
    //labels.forEach((label) => console.log(label.description));
    
    labels.forEach((label) => {
        //console.log(label.description)}
        a = a+" " + label.description;
    });
    resp.send(a);

  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
})