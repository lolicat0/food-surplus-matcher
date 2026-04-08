import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        try {
          // Fetch additional user details from Firestore
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            setUser({ uid: firebaseUser.uid, ...userDocSnap.data() });
          } else {
            // Fallback if user document hasn't been created yet
            setUser({ uid: firebaseUser.uid, email: firebaseUser.email });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // user stat is automatically set by the onAuthStateChanged listener
      return { status: 'success', data: { user: userCredential.user } };
    } catch (error) {
      console.error('Login error in AuthContext:', error);
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const { email, password, name, phone, userType, ...otherData } = userData;
      
      // 1. Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // 2. Save additional user details in Firestore
      const newUserProfile = {
        email,
        name: name || '',
        phone: phone || '',
        role: userType || 'donor', // 'donor', 'charity', 'volunteer', etc.
        ...otherData,
        createdAt: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'users', firebaseUser.uid), newUserProfile);
      
      // Update local state so it's immediately available
      setUser({ uid: firebaseUser.uid, ...newUserProfile });
      
      return { status: 'success', data: { user: { uid: firebaseUser.uid, ...newUserProfile } } };
    } catch (error) {
      console.error('Signup error in AuthContext:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  const value = { user, login, signup, logout, loading };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};