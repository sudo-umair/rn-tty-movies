import { useCallback, useState } from 'react';

const useLoading = (initLoading: boolean = false, initLoadingText: string = 'Loading...') => {
  const [loading, setLoading] = useState<boolean>(initLoading);
  const [loadingText, setLoadingText] = useState<string>(initLoadingText);

  const updateLoading = useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  const updateLoadingText = useCallback((text: string) => {
    setLoadingText(text);
  }, []);

  return [loading, updateLoading, loadingText, updateLoadingText] as const;
};

export default useLoading;
