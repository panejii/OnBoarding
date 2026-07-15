import ShareItem from "./ShareItem";

const ShareColumn = ({ title, color, data }) => {
    
    console.log({
    title,
    color,
    data,
});
  
    return (
    <div className="h-full rounded-2xl border border-gray-200 overflow-hidden flex flex-col">

      {/* Header */}
      <div
        className={`text-center text-white font-semibold py-0.5 text-[8px] ${
          color === "purple"
            ? "bg-linear-to-r from-fuchsia-500 to-violet-500"
            : "bg-linear-to-r from-blue-500 to-indigo-500"
        }`}
      >
        {title}
      </div>

      {/* List */}
      <div className="flex-1 flex flex-col gap-3 p-1 justify-between`">
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