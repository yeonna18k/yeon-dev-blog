import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), '_posts')

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  const slugs = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''))
  return slugs
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data,
    content,
  }
}

export async function getPostsList() {
  const slugs = getAllPostSlugs()
  const postsList = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return postsList
}
