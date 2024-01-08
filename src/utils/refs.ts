import { customRef } from "vue";

export function debounceRef<T>(initialValue: T, delay?: number) {
  return customRef<T>((track, trigger) => {
    let timeout: number = NaN;
    return {
      get() {
        track();
        return initialValue;
      },
      set(value: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          initialValue = value;
          trigger();
        }, delay ?? 500);
      }
    };
  });
};