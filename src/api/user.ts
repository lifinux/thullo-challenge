import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

const db = getFirestore();
const citiesCol = collection(db, 'users');

export const getUsers = async() => {
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}