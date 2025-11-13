import { getComputedStyle } from './getComputedStyle';

const originalGetComputedStyle = window.getComputedStyle;

export function mockGetComputedStyle() {
  window['getComputedStyle'] = getComputedStyle;
}
export function restoreGetComputedStyle() {
  window['getComputedStyle'] = originalGetComputedStyle;
}