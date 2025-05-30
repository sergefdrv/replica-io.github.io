import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComments from '@site/src/components/GiscusComments';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { title, frontMatter: { disableComments } } = metadata;

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && !disableComments && (
        <GiscusComments title={title}/>
      )}
    </>
  );
}
