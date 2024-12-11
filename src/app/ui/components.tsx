export const components = () => {
  return {
    h1: ({ children }: { children: string }) => (
      <h1 className="text-2xl text-red-300">{children}</h1>
    ),
    h2: ({ children }: { children: string }) => (
      <h1 className="text-xl text-blue-300">{children}</h1>
    ),
  }
}
