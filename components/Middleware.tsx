import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

const useAuthMiddleware = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark layout as mounted once the effect runs
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Wait until layout is mounted to navigate
    if (isMounted && !isAuthenticated) {
      router.replace('/auth/login');
    }
  }, [isMounted, isAuthenticated, router]);

  return isAuthenticated;
};

export default useAuthMiddleware;
