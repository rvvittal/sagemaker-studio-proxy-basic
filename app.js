const express = require('express');
const app = express();

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');
var sagemaker = new AWS.SageMaker({apiVersion: '2017-07-24', region: 'us-west-2'});
var port = process.env.PORT || 3000

var params = {
  DomainId: 'd-sg3vrmapgbpv', /* required */
  UserProfileName: 'rvvittal', /* required */
  ExpiresInSeconds: '300',
  SessionExpirationDurationInSeconds: '3000'
};

var authurl='';
var authHtml ='';






app.get('/', (req, res) => {

  sagemaker.createPresignedDomainUrl(params, function(err, data) {
    
  if (err) console.log(err, err.stack); // an error occurred
  else   {
    console.log(data);  
    authurl = data.AuthorizedUrl;
    console.log('authurl:' +authurl);
    authHtml = "<html><head/><body><a href='" +authurl + "'>Open Studio</a>" + "</body></html>";
    console.log(authHtml);

  }           // successful response
});

	res.send(authHtml);
});


app.listen(port, () => {
	console.log("hello world")
});

