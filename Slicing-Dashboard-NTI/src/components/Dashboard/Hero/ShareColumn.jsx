import ShareItem from "./ShareItem";

const ShareColumn = ({ title, color, data }) => {
    
    console.log({
    title,
    color,
    data,
});
  
    return (
    <div className="flex-1 rounded-2xl border border-gray-200 overflow-hidden">

      {/* Header */}
      <div
        className={`text-center text-white font-semibold py-2 ${
          color === "purple"
            ? "bg-linear-to-r from-fuchsia-500 to-violet-500"
            : "bg-linear-to-r from-blue-500 to-indigo-500"
        }`}
      >
        {title}
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 p-3">
        {data.map((item) => (
          <ShareItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </div>
  );
};

export default ShareColumn;