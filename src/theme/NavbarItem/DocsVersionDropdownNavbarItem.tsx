import React from 'react';
import useRouteContext from '@docusaurus/useRouteContext';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useLocation} from "@docusaurus/router";

export default function DocsVersionDropdownNavbarItemWrapper(props) {
    const location = useLocation();
    if (location.pathname.startsWith(`/${props.docsPluginId}`)) {
        return <DocsVersionDropdownNavbarItem {...props} />;
    }

    return null;

}
