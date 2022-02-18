const {initializeApp, cert, getApps } = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');

const serviceAccount= require('../credentials.json');

exports.connectDb = () => {
    if(!getApps().length){
        initializeApp({
            credential: cert(serviceAccount)
        });
}
return getFirestore();
}
// Everything above this is a template to connect to database and can be used for final project firestore only