type WithChildren<T = unknown> = T & { children: React.ReactNode };

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};
