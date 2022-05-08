import React from "react";

import tw from 'tailwind-styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, StaticQuery } from "gatsby";
import 'react-loading-skeleton/dist/skeleton.css'

import Dictionary from 'types'
import PageWrapper from "@components/PageWrapper"
import StackPresentation from "@components/StackPresentation"

type ProjectEntryLayoutProps = {
	pageContext: Dictionary<string> | Dictionary
}

type SmallerGalleryProps = {
	pictures: Array<string>
}

const ProjectEntryLayoutWrapper = tw.article`
	w-full
`

const PostTitle = tw.h1`
	font-display
	font-bold
	text-primary-500
	text-3xl
	mb-8
	bg-primary-100
	px-4
	py-2
	h-fit
	text-center

	max-w-full
	md:text-6xl
	md:py-5
	md:top-8
	md:mb-12
	md:text-left
`

const ProjectPresentationHero = tw.div`
	flex
	flex-col
	w-full
	gap-4
	h-fit

	md:flex-row
	md:justify-center
	md:align-middle
	md:gap-20
`

const GalleryWrapper = tw.section`
	flex
	flex-nowrap
	gap-5
	overflow-x-scroll
	overflow-y-hidden

	md:overflow-hidden
`

const BigPicture = tw.img`
	bg-secondary-500
	mb-4
	border-8
	border-primary-500
	max-w-sm
	h-fit

	md:mb-0
	md:max-w-lg
	md:relative
	md:top-10
`

const ContentWrapper = tw.main`
	flex
	flex-col
	align-middle
	justify-center
	mt-4
	px-5
	pt-3
	pb-10
	w-fit
	bg-secondary-500
`

const SmallerGalleryWrapper = tw.div`
	relative
	flex
	flex-row
	flex-nowrap
	flex-shrink-0
	align-middle
	justify-center
	m-auto
	gap-4
	h-full
	scrollbar-thin

	md:overflow-x-hidden
	md:overflow-y-scroll
	md:flex-col
`

const SmallPicture = tw.img`
	border-4
	border-primary-500
	max-w-sm

	md:max-w-md
`

const SmallerGallery: React.FunctionComponent<SmallerGalleryProps> = ({pictures}) => {
	return(
		<SmallerGalleryWrapper>
			{pictures.map((picture: string, index: number) => <SmallPicture src={picture} key={`smpic_${index}`}/>)}
		</SmallerGalleryWrapper>
	)
}

const ProjectMetadata = tw.div`
	flex
	flex-col
	h-full

	md:relative
	md:w-1/4
`

const Abstract = tw.p`
	font-body
	text-2xl
	w-full
	mb-5

	mb:overflow-y-scroll
	md:scrollbar-thin
	md:h-40
`

const ProjectEntryLayout: React.FunctionComponent<ProjectEntryLayoutProps> = ({pageContext: context}) => {

	const project_gallery_query = graphql`
		query ProjectsThumbnailQuery {
			allFile(filter: {relativePath: {regex: "/galleries/"}}) {
				edges {
					node {
						absolutePath
						publicURL
					}
				}
			}
		}
	`

	return(
		<StaticQuery
			query={project_gallery_query}
			render={(query_result: Dictionary<string>) => {
				const thumbnail_matches = query_result.allFile.edges.map(
					(edge: Dictionary<string>) => {
						if (edge.node.absolutePath.includes(`galleries/${context.frontmatter.gallery}`)){
							return edge.node.publicURL
						} 
					} 
				)
				return(
					<PageWrapper extraClass='w-full'>
						<ProjectEntryLayoutWrapper>
							<PostTitle>{context.frontmatter.title}</PostTitle>
							<ProjectPresentationHero>
								<GalleryWrapper>
									<BigPicture src={thumbnail_matches[0]}/>
									<SmallerGallery pictures={thumbnail_matches.slice(1)}/>
								</GalleryWrapper>
								<ProjectMetadata>
									<p className="my-5 mx-auto text-2xl md:text-5xl font-display font-bold">Project info</p>
									<p className="my-2 underline text-sm md:text-lg font-bold">Quick rundown:</p>
									<Abstract>{context.frontmatter.abstract}</Abstract>
									<p className="mt-1 underline text-sm md:text-lg font-bold">Tech Stack:</p>
									<StackPresentation techs={context.frontmatter.techs}/>
								</ProjectMetadata>
							</ProjectPresentationHero>
							<p className="mt-7 underline text-2xl md:text-4xl font-display tracking-tighter font-bold">The whole story</p>
							<ContentWrapper>
								<MDXRenderer>{context.content}</MDXRenderer>
							</ContentWrapper>
						</ProjectEntryLayoutWrapper>
					</PageWrapper>
				)}
			}
		/>
	)
}

export default ProjectEntryLayout