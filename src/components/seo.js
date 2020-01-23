import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ogImage from '../images/fbcover.png'

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
          keywords
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const title = defaults.title;
  const description = defaults.description;
  const keywords = defaults.keywords;
  const author = defaults.author;
//   const image = defaults.image;
  const url = new URL(defaults.baseUrl);
//   const image = post.image ? new URL(post.image, defaults.baseUrl) : false;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;