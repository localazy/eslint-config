const esmPatterns = ['*.js', '*.ts', '*.mjs', '*.mts', '*.jsx', '*.tsx', '*.mjsx', '*.mtsx'];
const cjsPatterns = ['*.cjs', '*.cts'];
const jsPatterns = ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.mjsx'];
const tsPatterns = ['*.ts', '*.mts', '*.cts', '*.tsx', '*.mtsx'];
const dtsPatterns = ['*.d.ts', '*.d.mts', '*.d.cts'];
const sourcesPatterns = [...esmPatterns, ...cjsPatterns];
const allPatterns = [...sourcesPatterns, ...dtsPatterns];

function addAsterisks(patterns: string[]) {
  return patterns.map((pattern) => `**/${pattern}`);
}

const esm = addAsterisks(esmPatterns);
const cjs = addAsterisks(cjsPatterns);
const js = addAsterisks(jsPatterns);
const ts = addAsterisks(tsPatterns);
const dts = addAsterisks(dtsPatterns);
const sources = [...esm, ...cjs];
const all = [...sources, ...dts];

/**
 * Base file patterns without path prefixes
 */
export const filePatterns = {
  esm: esmPatterns,
  cjs: cjsPatterns,
  js: jsPatterns,
  ts: tsPatterns,
  dts: dtsPatterns,
  sources: sourcesPatterns,
  all: allPatterns,
};

/**
 * Full glob patterns with path prefixes
 * These are the patterns used in ESLint configurations
 */
export const files = {
  esm,
  cjs,
  js,
  ts,
  dts,
  sources,
  all,
};
