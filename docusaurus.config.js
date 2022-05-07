const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pay with iyzico',
  tagline: 'Alternative Payment Method',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pay_with_iyzico_colored.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'PWI Guide',
      logo: {
        alt: 'My Site Logo',
        src: 'img/pay_with_iyzico_colored.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/iyzico',
          docId: 'intro',
          position: 'left',
          label: 'Github',
        }
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {to: '/blogss', label: 'Blogs', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              href: 'https://www.iyzico.com/en',
            },
            {
              label: 'Career',
              href: 'https://www.iyzico.com/en/about-us/career',
            },
            {
              label: 'Pay with iyzico',
              href: 'https://www.iyzico.com/en/business/pay-with-iyzico'
            },
            {
              label: 'Social',
              href: 'https://www.iyzico.com/en/about-us/social-responsibilty',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCk4iPbGOno3mTSWEvQ1Rk5Q/featured',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Page',
              href: 'https://dev.iyzipay.com/en',
            },
            {
              label: 'Github',
              href: 'https://github.com/iyzico',
            },
            {
              label: 'Medium',
              href: 'https://iyzico.engineering/',
            }
          ],
        },
        {
          title: 'Integration',
          items: [
            {
              label: 'Brand Guide',
              href: 'https://www.iyzico.com/en/about-us/iyzico-brand-guide',
            },
            {
              label: 'Solution Partners',
              href: 'https://www.iyzico.com/en/readyIntegration',
            },
            {
              label: 'Open Source',
              href: 'https://www.iyzico.com/en/open-source',
            }  

          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Contact Us',
              href: 'https://www.iyzico.com/en/support/contact-us',
            },
            {
              label: 'Support Center',
              href: 'https://www.iyzico.com/en/support/help-center',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
          ],
        },
        
      ],
      copyright: `© iyzico ${new Date().getFullYear()} `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
