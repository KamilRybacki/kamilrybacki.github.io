import React from 'react';

import tw from 'tailwind-styled-components'

import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import PageContent from './PageContent'

type PageWrapperProps = {
    header: boolean,
    footer: boolean,
    extraClass: string,
    children: JSX.Element | JSX.Element[]
}

const PageWrapperLayout = tw.main`
    flex
    flex-col
    justify-center
    align-middle
    w-screen
    h-auto
    m-0
`

const PageWrapper: React.FunctionComponent<PageWrapperProps> = ({ header = true, footer = true, extraClass = '', children }) => {
    return (
        <PageWrapperLayout className={extraClass}>
            {header ? <PageHeader/> : ''}
            <PageContent>
                {children}
            </PageContent>
            {footer ? <PageFooter/> : ''}
        </PageWrapperLayout>
    )
};

PageWrapper.defaultProps = {
    header: true
}

export default PageWrapper