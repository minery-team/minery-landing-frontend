export const AOS_DEFAULT_DURATION = 600;
export const AOS_BASE_DURATION_DISTANCE = 200;

export const aosDefaultConfig = {
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: true,
  disableMutationObserver: true,
  debounceDelay: 100,
  throttleDelay: 120,
  offset: 100,
  delay: 0,
  duration: 700,
  easing: "ease-in-out",
  once: false,
  mirror: false,
} as const;
