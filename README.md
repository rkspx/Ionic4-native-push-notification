# Ionic4-native-push-notification
Learning how to make simple native push notification that works on both android and IOS, 
based on Jeff Delaney tutorial about FCM 
https://angularfirebase.com/lessons/ionic-native-with-firebase-fcm-push-notifications-ios-android/#Install-Dependencies

# Start
- clone project
- add .secret directory in root
- paste in your firebase web config to firebaseConfig const in firebase.conf.ts file inside .secret directory (and export it)
- add your google-services.json to root directory
- npm i
- ionic cordova platform add android
- ionic cordova platform add ios

# Run
- ionic cordova run android --prod
