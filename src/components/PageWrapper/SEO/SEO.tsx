import React from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from '@reach/router';
import {useStaticQuery, graphql} from 'gatsby';

// @ts-ignore
import generalSiteCard from '@images/card.png';

// @ts-ignore
import favico from '@images/favico.png';

// @ts-ignore
import {ContentAndMetadataQuery, Node} from '@root/graphql-types';

const seoQuery = graphql`
  query contentAndMetadata {
    site {
      siteMetadata {
        title
        description
        baseUrl
      }
    }
    allMdx {
      nodes {
        excerpt(pruneLength: 200)
        frontmatter{
          title
        }
        slug
      }
    }
  }
`;

const SEO = () => {
  const [seoMetadata, setSeoMetadata] = React.useState({
    'title': '',
    'type': '',
    'ogTitle': '',
    'description': '',
    'thumbnail': '',
    'url': '',
  });
  const seoQueriedData: ContentAndMetadataQuery = useStaticQuery(seoQuery);
  const canonicalURL = (typeof window !== 'undefined') ? useLocation().href.split('?')[0]: '';

  const determinePageType = () => {
    const checkIfUrlIsSubpathOf = (pattern: string) => {
      return canonicalURL.includes(pattern) && !canonicalURL.endsWith(pattern);
    };
    return checkIfUrlIsSubpathOf('/posts') || checkIfUrlIsSubpathOf('/projects');
  };

  const filterQueriedData = () => {
    const currentSlug = canonicalURL.split('/').at(-1);
    const [pageNode] = seoQueriedData.allMdx.nodes.filter((node: Node) => {
      return node.slug === currentSlug;
    });
    return {
      'title': pageNode.frontmatter.title,
      'description': pageNode.excerpt,
    };
  };

  React.useEffect(() => {
    const pageType = determinePageType();
    const getArticleMetadata = async () => {
      return pageType ? await filterQueriedData() : seoQueriedData;
    };
    getArticleMetadata().then((articleMetadata) => {
      const titleFlair = articleMetadata.title ? `${articleMetadata.title} | ` : '';
      setSeoMetadata({
        'title': `${titleFlair}${seoQueriedData.site.siteMetadata.title}`.trim(),
        'type': pageType ? 'article' : 'website',
        'ogTitle': articleMetadata.title,
        'description': articleMetadata.description.replace('\n', ' '),
        'thumbnail': `${seoQueriedData.site.siteMetadata.baseUrl}${generalSiteCard}`,
        'url': canonicalURL,
      });
    });
  }, []);

  return (
    // @ts-ignore
    <Helmet>
      <meta charSet="utf-8" />
      <title>{seoMetadata.title}</title>
      <link rel="icon" type="image/png" href={favico} sizes="16x16" />
      <meta httpEquiv="Expires" content="600"/>
      <link href={seoMetadata.url} rel="canonical"/>
      <meta property="og:url" content={seoMetadata.url}/>
      <meta property="og:type" content={seoMetadata.type}/>
      <meta property="og:title" content={seoMetadata.ogTitle}/>
      <meta property="og:description" content={seoMetadata.description}/>
      <meta property="og:image" content={seoMetadata.thumbnail} />
    </Helmet>
  );
};

export default SEO;
