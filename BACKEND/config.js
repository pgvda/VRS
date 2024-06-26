const admin = require('firebase-admin');
const serviceAccount = require('../BACKEND/firebase-admin-key.json');

// Initialize Firebase Admin SDK with the service account key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://facultydriver-default-rtdb.firebaseio.com" // Only required for Firebase Realtime Database
});

const db = admin.firestore(); // Use the initialized Firebase instance

const vehicleCollection = db.collection("Vehicle");
const requestCollection = db.collection("Request");
const driversCollection=db.collection("LocationTrack")
module.exports = {
    vehicleCollection: vehicleCollection,
    requestCollection: requestCollection,
    driversCollection:driversCollection
};