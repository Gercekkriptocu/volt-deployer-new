import { useEffect, useState } from 'react';

interface QuickAuthResult {
  isAuthenticated: boolean;
  fid?: number;
  username?: string;
}

export function useQuickAuth(isInFarcaster: boolean): QuickAuthResult {
  const [authResult, setAuthResult] = useState<QuickAuthResult>({
    isAuthenticated: false,
  });

  useEffect(() => {
    // Browser-only execution
    if (typeof window === 'undefined' || !isInFarcaster) {
      return;
    }

    const initQuickAuth = async () => {
      try {
        await import('@farcaster/quick-auth');
        // Quick Auth available
      } catch (error) {
        // Quick Auth not available
      }
    };

    initQuickAuth();
  }, [isInFarcaster]);

  return authResult;
}
