import {auth} from "../Firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from 'firebase/auth';

export function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth,email, password);
}

export function logOut(){
    return signOut(auth);
}