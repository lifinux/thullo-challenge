import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore();
const citiesCol = collection(db, "users");
const auth = getAuth();

export const getUsers = async () => {
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
};

export const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential.user;
        })
        .catch((error) => {
            return error;
        });
};
