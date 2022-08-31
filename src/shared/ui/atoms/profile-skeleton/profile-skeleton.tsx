export const ProfileSkeleton = () => {
  return (
    <div className="w-full shadow-md animate-pulse rounded-lg">
      <div className="animate-pulse flex flex-col gap-2 p-1 justify-center items-center">
        <div className="rounded w-full border border-gray-200 flex justify-center flex-col items-center gap-1">
          <div className="max-w-[700px] sm:w-5/6  flex flex-col justify-center items-center p-8 gap-2">
            <div className="rounded-full w-[100px] h-[100px] bg-gray-200 border-gray-400" />
            <div className="rounded-full w-36 h-7 bg-gray-200 border-gray-400" />
            <div className="rounded-sm w-36 h-7 bg-gray-200 border-gray-400 self-end" />
          </div>
          <div className="flex flex-col sm:container sm:mx-auto mt-4 px-2">
            <div className="flex gap-8 py-2 border-b-2 border-gray-200 mb-1">
              <div className="rounded-md w-32 h-8 bg-gray-200 border-gray-400" />
              <div className="rounded-md w-32 h-8 bg-gray-200 border-gray-400" />
            </div>
            <div className="rounded-md w-full h-80 bg-gray-200 border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
