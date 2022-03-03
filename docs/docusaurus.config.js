// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Acesso Cidadão',
    tagline: 'Documentação do Acesso Cidadão',
    url: 'https://docs.acessocidadao.es.gov.br',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'prodest', // Usually your GitHub org/user name.
    projectName: 'prodest-acessocidadao-docs', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateTime: true
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Acesso Cidadão',
                logo: {
                    alt: 'Logo ES',
                    src: 'img/logo.png',
                },
                items: [

                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        label: 'Swagger API',
                        href: 'https://api.cargarh.es.gov.br/',
                    },
                    {
                        label: 'Docs Acesso Cidadão',
                        href: 'https://docs.developer.acessocidadao.es.gov.br/',
                    },
                ],
                copyright: `© Copyright ${new Date().getFullYear()}. Desenvolvido pelo PRODEST. Utilizando o software Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp'],
            },
        }),

    i18n: {
        defaultLocale: 'pt-BR',
        locales: ['pt-BR'],
    },
};

module.exports = config;