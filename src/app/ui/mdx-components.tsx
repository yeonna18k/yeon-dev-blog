import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }: React.ComponentProps<'h1'>) => (
    <h1 className="text-2xl text-red-300" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.ComponentProps<'h2'>) => (
    <h2 className="text-xl text-blue-300" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<'h3'>) => (
    <h3 className="text-lg text-blue-500" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentProps<'p'>) => (
    <p className="" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }: React.ComponentProps<'a'>) => (
    <a
      className=" text-blue-500 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: React.ComponentProps<'ul'>) => (
    <ul className="" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentProps<'ol'>) => (
    <ol className="" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentProps<'li'>) => (
    <li className="" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-blue-300 pl-4 italic text-gray-500"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }: React.ComponentProps<'pre'>) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded overflow-x-auto"
      {...props}
    >
      {children}
    </pre>
  ),
}
