// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Documentação Acesso Cidadão para desenvolvedores',
    tagline: 'Documentação do Acesso Cidadão para desenvolvedores',
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
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/prodest/prodest-acessocidadao-docs/tree/main/dev/',
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
                title: 'Documentação Acesso Cidadão para desenvolvedores',
                logo: {
                    alt: 'Logo ES',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        href: 'https://github.com/prodest/prodest-acessocidadao-docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        label: 'Swagger API Acesso Cidadão',
                        href: 'https://api.acessocidadao.es.gov.br/',
                    },
                ],
                copyright: `© Copyright 2015 - ${new Date().getFullYear()}. Desenvolvido pelo PRODEST. Utilizando o software Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp','http'],
            },
        }),

    i18n: {
        defaultLocale: 'pt-BR',
        locales: ['pt-BR'],
    },
};

module.exports = config;