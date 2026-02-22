import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
  content: string
  readingTime: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    return getPostBySlug(slug)
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  // Strip the leading markdown H1 (e.g. "# Title\n\n") since the page
  // template already renders the title from frontmatter as an <h1>.
  const body = content.replace(/^\s*#\s+.+\n+/, '')

  return {
    slug: data.slug || slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || 'CrossFit Aggieland',
    keywords: data.keywords || [],
    content: body,
    readingTime: stats.text,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
