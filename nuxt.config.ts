// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['github:warflash/nuxt-layers-base'],
  alias: {
    '@nuxt/kit': require.resolve('@nuxt/kit/import'),
  },
});
