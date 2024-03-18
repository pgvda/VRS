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

exports.sendNotificationOnRequestCreation = functions.firestore
    .document('requests/{requestId}')
    .onCreate((snap, context) => {
        const requestData = snap.data();

        const payload = {
            notification: {
                title: 'New Request Added',
                body: `Details: ${requestData.detail}`, // Customize your message with request details
                icon: 'default_icon',
                click_action: 'OPEN_ACTIVITY_1'
            }
        };

        return admin.messaging().sendToTopic('requests', payload)
            .then(response => {
                console.log('Notification sent successfully:', response);
                return null; // Resolve the promise
            })
            .catch(error => {
                console.log('Notification sent failed:', error);
            });
    });
