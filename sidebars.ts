import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { SidebarConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types';
import { pages } from './page';

const items: SidebarConfig = [
    {
        type: 'link',
        label: 'Introduction',
        href: 'docs'
    },
    ...pages.map((lib) => ({
        type: 'link',
        label: lib,
        href: '../' + lib
    }))
];

const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    docs: items
};

export default sidebars;
