import { siteConfig } from './lib/site-config'

const { NEXT_PUBLIC_WORKSPACE_APIKEY } = process.env;

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: NEXT_PUBLIC_WORKSPACE_APIKEY,

  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'resister-devlog',
  domain: 'resister-devlog.dev',
  author: 'resister-boy',

  // open graph metadata (optional)
  description: 'Hello, World🚀. Turning Vision Into Reality With Code.',

  twitter: 'resister_boy',
  github: 'Resister-boy',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,

  isRedisEnabled: false,

  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
