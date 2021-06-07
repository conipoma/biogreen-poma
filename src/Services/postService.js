import db from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const orderCollection = db.collection('orders');

export function createOrder(buyer, item, total) {
    return orderCollection
      .add({
        buyer: buyer,
        item: item,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,
      })
      .then(function (orderId) {
        return orderId.id;
      })
      .catch(function (error) {
        return error;
      });
    }  