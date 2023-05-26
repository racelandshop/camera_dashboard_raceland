declare global {
  // eslint-disable-next-line
  interface HASSDomEvents {}
}

export type ValidHassDomEvent = keyof HASSDomEvents;

export interface HASSDomEvent<T> extends Event {
  detail: T;
}
