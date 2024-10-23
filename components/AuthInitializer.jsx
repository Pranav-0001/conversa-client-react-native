// AuthInitializer.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadToken } from '../app/(redux)/authSlice';

const AuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await AsyncStorage.getItem('currentUser');
        if (currentUser) {
          dispatch(loadToken(currentUser));
        }
      } catch (error) {
        console.error('Failed to load token from AsyncStorage:', error);
      }
    };

    initializeAuth();
  }, [dispatch]);

  return null; // This component doesn't render anything
};

export default AuthInitializer;
