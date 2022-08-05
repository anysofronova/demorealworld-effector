type Props = Readonly<{
  title: string
  description: string
}>

export const ArticleContent = ({ title = '', description = '' }: Props) => {
  return (
    <div className="mt-2">
      <p className="text-2xl text-gray-700 font-bold hover:text-gray-600">
        {title}
      </p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}
