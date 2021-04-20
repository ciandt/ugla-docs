module.exports = {
  title: 'Ugla',
  tagline: 'The complete Ugla\'s guide',
  url: 'https://ugla.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ciandt', // Usually your GitHub org/user name.
  projectName: 'ugla', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: 'f0b9e026d50eb65923403e921f3d6b46',
      indexName: 'ugla',
      contextualSearch: true,
      appId: 'BH4D9OD16A',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Ugla Docs',
      logo: {
        alt: 'Ugla logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/get-started/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ciandt/ugla',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/get-started/',
            },
            {
              label: 'Components',
              to: 'docs/components/aside',
            },
            {
              label: 'Services',
              to: 'docs/services/ugla-service',
            },
            {
              label: 'Models',
              to: 'docs/models/models',
            },
            {
              label: 'CSS',
              to: 'docs/css/color',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/ugla_builds',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ciandt/ugla',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ugla. Supported by CI&T.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ciandt/ugla-docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ciandt/ugla-docs/tree/main/blog',
          postsPerPage: 6,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
