export const ArticleListSkeleton = () => (
  <div className="grid grid-cols-1 gap-6 mt-4 w-full">
    <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden rounded-lg">
      <div className="animate-pulse flex flex-col">
        <div className="rounded w-full h-80 bg-gray-200"></div>
      </div>
    </div>
  </div>
)
