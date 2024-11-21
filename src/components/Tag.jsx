
function Tag({tag}) {
  return (
    <div className="bg-secondary/40 font-bold mb-2 text-primary inline-block rounded-full px-4 py-1 mx-auto">
      <p className="text-sm text-gray-600 uppercase">{tag}</p>
    </div>
  )
}

export default Tag