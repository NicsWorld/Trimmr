import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

export default function SignInWithGoogle() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
const firestore = firebase.firestore();
const auth = firebase.auth();

  return(
    <section className="sign-in-wrapper">
    <div className="google-btn">
      <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
      </div>
      <p onClick={signInWithGoogle} className="btn-text"><b>Sign in with Google</b></p>
    </div>
    </section>
  );
}
