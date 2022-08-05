export const ArticleSingleSkeleton = () => {
  return (
    <div className="w-full shadow-md animate-pulse rounded-lg">
      <div className="animate-pulse flex flex-col gap-1 py-3 px-8">
        <div className="flex justify-between">
          <div className="rounded w-32 h-10 bg-gray-200" />
          <div className="rounded w-24 h-10 bg-gray-200" />
        </div>
        <div className="rounded w-full h-24 bg-gray-200" />
        <div className="flex justify-between">
          <div className="rounded w-28 h-10 bg-gray-200" />
          <div className="rounded w-36 h-10 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
