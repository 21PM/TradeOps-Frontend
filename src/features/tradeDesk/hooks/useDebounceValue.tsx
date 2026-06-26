import React, { useEffect } from "react";

/**
 * Custom hook to debounce any value.
 * Delays updating the debounced value until the input stops changing for the specified delay.
 * Useful for optimizing performance with frequent updates (e.g., search inputs, form fields).
 *
 * @template T - The type of value to debounce (string, number, object, etc.)
 * @param value - The value to debounce
 * @param delay - The debounce delay in milliseconds (default: 1000ms)
 * @returns Object containing the debounced value
 */
function useDebounceValue<T>(value: T, delay: number = 1000) {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  // Set up debounce effect
  useEffect(() => {
    // Schedule update of debounced value after the specified delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel the pending update if value or delay changes before timer fires
    // This prevents stale updates and ensures only the latest value is processed
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [value, delay]); // Re-run effect when value or delay changes

  // Return object containing the debounced value
  return {
    debouncedValue,
  };
}

export default useDebounceValue;
