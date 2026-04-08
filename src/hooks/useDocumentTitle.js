import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const useDocumentTitle = (title) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      document.title = `${title} - ${user.name || user.email?.split('@')[0] || 'User'} | FoodSurplus Matcher`;
    } else {
      document.title = `${title} | FoodSurplus Matcher`;
    }
  }, [title, user]);
};



