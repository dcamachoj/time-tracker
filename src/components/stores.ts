import { Readable, writable } from "svelte/store";

const initialScreenWidth = window.outerWidth;

const screenWidth = writable<number>(initialScreenWidth);
const isDesktop = writable<boolean>(false);
const isMobile = writable<boolean>(false);

export const BreakpointMobile = 375;
export const BreakpointDesktop = 1440;

export const ScreenWidth: Readable<number> = {
  subscribe: screenWidth.subscribe,
};
export const IsDesktop: Readable<boolean> = { subscribe: isDesktop.subscribe };
export const IsMobile: Readable<boolean> = { subscribe: isMobile.subscribe };

export function setScreenWidth(value: number) {
  screenWidth.set(value);
  isDesktop.set(value > BreakpointMobile && value <= BreakpointDesktop);
  isMobile.set(value <= BreakpointMobile);
  console.log("setScreenWidth", value);
}
