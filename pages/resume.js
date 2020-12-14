import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Resume = ({allMD}) => {

  return (<Layout>
    <h1>Resume</h1>
  </Layout>)
}

export default Resume

