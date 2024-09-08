import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { pages } from './page';

const config: Config = {
    title: 'Hodfords OpenSource',
    tagline:
        'At Hodfords, we believe in the power of open-source collaboration. This hub serves as the central place for developers, designers, and enthusiasts to explore, contribute, and utilize a growing collection of open-source libraries. ',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://opensource.hodfords.uk',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'hodfords-solutions', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],
    plugins: [
        ...pages.map((page) => [
            '@docusaurus/plugin-content-docs',
            {
                id: page,
                path: './pages/' + page,
                routeBasePath: page,
                sidebarPath: './sidebars.ts'
                // includeCurrentVersion: false,
            }
        ])
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Hodfords',
            logo: {
                alt: 'Hodfords Logo',
                src: 'img/logo.svg'
            },
            items: [
                { href: 'docs', label: 'Documents', position: 'left' },
                { href: 'https://www.hodfords.com/', label: 'Our Company', position: 'left' },
                ...pages.map((page) => ({
                    type: 'docsVersionDropdown',
                    position: 'right',
                    docsPluginId: page
                })),
                {
                    href: 'https://github.com/hodfords-solutions',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Hodfords OpenSource Documentation`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;
