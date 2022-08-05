export const ArticlePageSkeleton = () => {
  return (
    <div className="flex flex-col w-full animate-pulse p-2 rounded-md">
      <div className="flex flex-col w-full shadow-md p-8 gap-8">
        <div className="rounded w-5/6 h-8 bg-gray-200" />
        <div className="flex gap-2">
          <div className="rounded w-48 h-8 bg-gray-200" />
          <div className="rounded w-40 h-8 bg-gray-200" />
          <div className="rounded w-40 h-8 bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col w-full shadow-md p-8 gap-8">
        <div className="rounded w-full h-32 bg-gray-200" />
      </div>
      <div className="flex flex-col w-full shadow-md p-8 gap-8 justify-center items-center">
        <div className="flex gap-2">
          <div className="rounded w-40 h-8 bg-gray-200" />
          <div className="rounded w-40 h-8 bg-gray-200" />
          <div className="rounded w-40 h-8 bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col w-full shadow-md p-8 gap-8 justify-center items-center w-2/3 m-auto">
        <div className="rounded w-full h-52 bg-gray-200" />
        <div className="rounded w-40 h-8 bg-gray-200 self-end" />
      </div>
    </div>
  )
}
