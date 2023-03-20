export const BREAKPOINTS = {
  phoneMax: 600 / 16,
  tabletMax: 950 / 16,
  laptopMax: 1300 / 16
}

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}