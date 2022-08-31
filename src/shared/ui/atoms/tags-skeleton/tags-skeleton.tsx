export const TagsSkeleton = () => {
  return (
    <div className="w-full shadow-md animate-pulse rounded-lg">
      <div className="animate-pulse flex flex-col gap-2 p-1">
        <div className="rounded w-28 h-7 bg-gray-200" />
        <div className="flex flex-wrap gap-0.5">
          <div className="rounded-full w-36 h-6 bg-gray-200 border-gray-400" />
          <div className="rounded-full w-14 h-6 bg-gray-200 border-gray-400" />
          <div className="rounded-full w-28 h-6 bg-gray-200 border-gray-400" />
          <div className="rounded-full w-24 h-6 bg-gray-200 border-gray-400" />
        </div>
      </div>
    </div>
  )
}
