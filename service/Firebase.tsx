import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/app';
import moment from 'moment';
import 'firebase/database';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDUrh5yczDZ42JgEaAZTjtmM4V53yh04FE',
    authDomain: 'ventalibre-16620.firebaseapp.com',
    databaseURL: 'https://ventalibre-16620-default-rtdb.firebaseio.com',
    projectId: 'ventalibre-16620',
    storageBucket: 'ventalibre-16620.appspot.com',
    messagingSenderId: '602452979297',
    appId: '1:602452979297:web:aeb325a84b5e2d8663c420'
  });
}
