import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Blog = ({allMD}) => {

  return (<Layout>
    <h1>Hello World</h1>
   
    <MDList posts={allMD}/>
  </Layout>)
}

export default Blog

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const allMD = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../markdown', true, /\.md$/))

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      allMD
    },
  }
}
