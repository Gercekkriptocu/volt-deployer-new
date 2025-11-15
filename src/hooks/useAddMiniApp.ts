import { useCallback } from 'react';

export function useAddMiniApp() {
  const addMiniApp = useCallback(async () => {
    // Browser-only execution
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const { sdk } = await import('@farcaster/miniapp-sdk');
      await sdk.actions.addMiniApp();
    } catch (error) {
      // Silent fail
    }
  }, []);

  return { addMiniApp };
}
