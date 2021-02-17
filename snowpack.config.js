/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'tsc --noEmit',
        watch: '$1 --watch',
      },
    ],
    ['@snowpack/plugin-run-script', { cmd: 'svelte-check' }],
  ],
  packageOptions: {
    installTypes: true,
    knownEntrypoints: ['classnames'],
  },
}
