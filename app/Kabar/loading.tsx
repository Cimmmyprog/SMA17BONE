export default function Loading() {
    return (
        <div><div className="animate-pulse bg-white rounded-3xl shadow-md overflow-hidden">
        <div className="w-full h-64 bg-gray-300"></div>
        <div className="p-6">
          <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div></div>
    )
}