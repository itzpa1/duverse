import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchCollection(collectionName: string) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
