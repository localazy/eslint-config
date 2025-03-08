const { createJiti } = require('jiti');
const path = require('node:path');

const jiti = createJiti(__filename, {
  alias: {
    '@/': path.resolve(__dirname, 'src'),
  },
});

const { default: localazy } = jiti('@/main');

module.exports = localazy();
