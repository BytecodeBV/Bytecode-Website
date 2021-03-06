import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BlogpostSingleProps, CallToActionProps } from './BlogpostLayout.types';
import Layout from '../MainLayout/MainLayout';
import Author from '../../containers/Author/Author';
import { Small } from '../../components/Typography/Typography';
import NewsletterSubscribe from '../../containers/NewsletterSubscribe/NewsletterSubscribe';
import {
    Article,
    ArticleHeader,
    SubtitleContainer,
    ReadingTime,
    Title,
    ArticleImageWrapper,
    ArticleImage,
    MetaData,
    PublishedOnContainer,
    BlogContent,
    ArticleIntro,
    CallToActionContainer,
    CallToActionText,
    StyledSubtitle,
} from './BlogpostLayout.components';

const CallToAction: React.FC<CallToActionProps> = () => (
    <CallToActionContainer>
        <CallToActionText>
            Dit artikel is met passie geschreven door Bytecode, een jonge en
            moderne web agency. Wij laten jou graag zien hoe je de kracht van
            het internet kunt gebruiken om alles uit jezelf te halen. Dit doen
            we door bijvoorbeeld dit artikel te schrijven, maar ook door deze
            inzichten in onze werkzaamheden te verwerken.
            <br />
            <br />
            Wil je meer over ons weten of kunnen we misschien iets voor je
            betekenen? <a href="/contact">Neem gerust contact met ons op</a> of
            kom een keer langs op de koffie!
        </CallToActionText>
        <NewsletterSubscribe />
    </CallToActionContainer>
);

const BlogSingle: React.FC<BlogpostSingleProps> = ({ content }) => (
    <Layout newsLetter={0.5} padded pageSettings={content.pageSettings}>
        <Article>
            <ArticleHeader>
                <SubtitleContainer>
                    <StyledSubtitle>{content.category_name}</StyledSubtitle>
                    <ReadingTime>
                        &nbsp;&nbsp;&#47;&#47; {content.reading_time} min. read
                    </ReadingTime>
                </SubtitleContainer>
                <Title>{content.title}</Title>
                <ArticleImageWrapper>
                    <ArticleImage
                        src={require(`../../images/img/articles/${content.article_image_url}`)}
                    />
                </ArticleImageWrapper>
                <MetaData>
                    <Author
                        name={content.author_name}
                        title={content.author_role}
                        img={content.author_image_url}
                    />
                    <PublishedOnContainer>
                        <Small>Gepubliceerd op {content.posted_on}</Small>
                    </PublishedOnContainer>
                </MetaData>
            </ArticleHeader>
            <BlogContent>
                <ArticleIntro>{content.article_intro}</ArticleIntro>
                <MDXRenderer>{content.post_content}</MDXRenderer>
                <CallToAction />
            </BlogContent>
        </Article>
    </Layout>
);
export default BlogSingle;
