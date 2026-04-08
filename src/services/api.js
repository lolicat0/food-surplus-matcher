import { db, auth } from './firebase';
import { 
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, 
  query, where, orderBy, serverTimestamp 
} from 'firebase/firestore';

// Auth API is mostly handled directly by AuthContext now. 
// We keep these stubs to warn developers to use AuthContext.
export const authAPI = {
  login: () => { throw new Error("Use AuthContext login instead"); },
  register: () => { throw new Error("Use AuthContext signup instead"); },
  getCurrentUser: () => { throw new Error("Use AuthContext user state"); },
  updatePassword: () => { throw new Error("Not implemented yet"); },
};

export const foodAPI = {
  getAll: async (params) => {
    const q = query(collection(db, "foods"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return { data: { data: querySnapshot.docs.map(d => ({ _id: d.id, ...d.data() })) } };
  },
  getById: async (id) => {
    const d = await getDoc(doc(db, "foods", id));
    return { data: { data: { _id: d.id, ...d.data() } } };
  },
  create: async (foodData) => {
    const docRef = await addDoc(collection(db, "foods"), {
      ...foodData,
      donor: auth.currentUser?.uid,
      status: 'available',
      createdAt: serverTimestamp()
    });
    return { data: { data: { _id: docRef.id, ...foodData } } };
  },
  update: async (id, foodData) => {
    await updateDoc(doc(db, "foods", id), foodData);
    return { data: { success: true } };
  },
  delete: async (id) => {
    await deleteDoc(doc(db, "foods", id));
    return { data: { success: true } };
  },
  reserve: async (id, data) => {
    await updateDoc(doc(db, "foods", id), {
      status: 'reserved',
      reservedBy: auth.currentUser?.uid,
      pickupTime: data?.pickupTime || null
    });
    return { data: { success: true } };
  },
  cancelReservation: async (id) => {
    await updateDoc(doc(db, "foods", id), {
      status: 'available',
      reservedBy: null,
      pickupTime: null
    });
    return { data: { success: true } };
  },
  pickup: async (id) => {
    await updateDoc(doc(db, "foods", id), { status: 'picked_up' });
    return { data: { success: true } };
  },
  getMyFoods: async (params) => {
    if (!auth.currentUser) return { data: { data: [] } };
    const q = query(collection(db, "foods"), where("donor", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    return { data: { data: querySnapshot.docs.map(d => ({ _id: d.id, ...d.data() })) } };
  },
};

export const userAPI = {
  getProfile: async (id) => {
    const d = await getDoc(doc(db, "users", id));
    return { data: { data: { _id: d.id, ...d.data() } } };
  },
  updateProfile: async (id, userData) => {
    await updateDoc(doc(db, "users", id), userData);
    return { data: { success: true } };
  },
  getStats: async (id) => {
    // Mock analytics for now
    return { data: { data: { mealsDonated: 127, posts: 23, pickupRate: 89, rating: 4.8 } } };
  },
};

export const charityAPI = {
  getAll: async (params) => {
    const q = query(collection(db, "users"), where("role", "==", "charity"));
    const snap = await getDocs(q);
    return { data: { data: snap.docs.map(d => ({ _id: d.id, ...d.data() })) } };
  },
  getById: async (id) => {
    const d = await getDoc(doc(db, "users", id));
    return { data: { data: { _id: d.id, ...d.data() } } };
  },
};

export const volunteerAPI = {
  getAll: async (params) => {
    const q = query(collection(db, "users"), where("role", "==", "volunteer"));
    const snap = await getDocs(q);
    return { data: { data: snap.docs.map(d => ({ _id: d.id, ...d.data() })) } };
  },
  getById: async (id) => {
    const d = await getDoc(doc(db, "users", id));
    return { data: { data: { _id: d.id, ...d.data() } } };
  },
};

export const donationAPI = {
  getAll: async (params) => { return { data: { data: [] } }; },
  getById: async (id) => { return { data: { data: {} } }; },
};

export const analyticsAPI = {
  getPlatform: async () => { return { data: { data: {} } }; },
  getUser: async () => { return { data: { data: {} } }; },
  getFoods: async (params) => { return { data: { data: {} } }; },
  getDonations: async (params) => { return { data: { data: {} } }; },
};

const api = {}; // dummy default for any legacy imports expecting axios mapping
export default api;