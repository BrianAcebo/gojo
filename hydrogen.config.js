import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STORE_DOMAIN || 'gojowatch.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      '30d3ea9ea0a915488dd25ae4dba9c6fd',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
