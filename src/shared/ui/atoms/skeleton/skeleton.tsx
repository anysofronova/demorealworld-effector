export const Skeleton = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center pt-2 justify-center">
      <div className="w-full animate-pulse flex flex-col items-center justify-center gap-4 rounded-xl border py-8 px-2">
        <div className="w-32 h-7 rounded-md bg-gray-300" />
        <div className="w-full h-10 rounded-md bg-gray-300" />
        <div className="w-full h-10 rounded-md bg-gray-300" />
        <div className="w-full h-56 rounded-md bg-gray-300" />
        <div className="w-full h-10 rounded-md bg-gray-300" />
        <div className="w-full h-10 rounded-md bg-gray-300" />
        <div className="w-40 h-10 rounded-md bg-gray-300 self-end" />
      </div>
    </div>
  )
}
