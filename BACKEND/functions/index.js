/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendNotificationToDriver = functions.firestore
    .document('requests/{requestId}')
    .onCreate((snap, context) => {
        const requestData = snap.data();

        // Extract relevant data from the request document
        const { driverId, reason, destination } = requestData;

        // Retrieve driver's FCM token from Firestore or any other data source
        const driverFCMToken = '...'; // Retrieve the driver's FCM token

        // Construct the notification payload
        const payload = {
            notification: {
                title: 'New Request',
                body: `New request: ${reason} to ${destination}`
            }
        };

        // Send the notification to the driver
        return admin.messaging().sendToDevice(driverFCMToken, payload);
    });