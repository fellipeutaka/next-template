type WithChildren<T = unknown> = T & { children: React.ReactNode };

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
