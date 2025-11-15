import { useState, useEffect } from 'react';

export function useIsInFarcaster(): boolean {
  const [isInFarcaster, setIsInFarcaster] = useState<boolean>(false);

  useEffect(() => {
    // Browser-only execution
    if (typeof window === 'undefined') {
      return;
    }

    const checkFarcasterContext = async () => {
      try {
        const { sdk } = await import('@farcaster/miniapp-sdk');
        const context = await sdk.context;
        setIsInFarcaster(!!context.client);
      } catch (error) {
        setIsInFarcaster(false);
      }
    };

    checkFarcasterContext();
  }, []);

  return isInFarcaster;
}
