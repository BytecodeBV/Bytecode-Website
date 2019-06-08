import React from 'react';
import { graphql } from 'gatsby';
import BlogpostLayout from '../layouts/BlogpostLayout';

const BlogpostTemplate = ({ data }) => {
    const { mdx } = data;
    const content = {
        pageSettings: {
            title: mdx.frontmatter.title,
            description: mdx.frontmatter.description,
            keywords: mdx.frontmatter.keywords,
        },
        article_image_url: mdx.frontmatter.article_image_url,
        catergory_name: mdx.frontmatter.catergory_name,
        title: mdx.frontmatter.title,
        author_name: mdx.frontmatter.author_name,
        author_role: mdx.frontmatter.author_role,
        author_image_url: mdx.frontmatter.author_image_url,
        posted_on: mdx.frontmatter.posted_on,
        reading_time: mdx.frontmatter.reading_time,
        post_content: mdx.code.body,
    };
    return <BlogpostLayout content={content} />;
};

export default BlogpostTemplate;

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                id
                title
                description
                keywords
                subtitle
                posted_on
                article_image_url
                summary
                author_name
                author_role
                author_image_url
                catergory_name
                category_slug
                reading_time
            }
            code {
                body
            }
        }
    }
`;
