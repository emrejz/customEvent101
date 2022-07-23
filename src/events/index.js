export const on = (eventType, listener) => {
  document.addEventListener(eventType, listener);
};

export const remove = (eventType, listener) => {
  document.removeEventListener(eventType, listener);
};

export const emit = (eventType, data) => {
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
};
