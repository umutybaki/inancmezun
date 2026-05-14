export function MdxContent({ html }: { html: string }) {
  return (
    <div
      className="prose-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
