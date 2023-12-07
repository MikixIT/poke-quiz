import { useCallback } from "react";

export function useCopyToClipboard(textToCopy) {
  const copy = useCallback(
    (event) => {
      // Prevent the default copy behavior
      event.preventDefault();

      // Set the custom text to copy
      event.clipboardData.setData("text/plain", textToCopy);
    },
    [textToCopy]
  );

  const addCopyListener = useCallback(() => {
    document.addEventListener("copy", copy);
  }, [copy]);

  const removeCopyListener = useCallback(() => {
    document.removeEventListener("copy", copy);
  }, [copy]);

  return { addCopyListener, removeCopyListener };
}
