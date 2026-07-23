import {
  Users,
  MessageCircleWarning,
  Gauge,
  MoveDown,
} from "lucide-react";

const statusClass = (status) => {
  if (status === "Critical") return "text-red-500 bg-red-100";
  if (status === "Warning") return "text-yellow-600 bg-yellow-100";
  return "text-green-600 bg-green-100";
};

const PopupInfo = ({ data,  title }) => {
  const iconClass =
    "w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-2.5 xl:h-2.5 2xl:w-[9px] 2xl:h-[9px]";

  if (!data) return null;

  return (
    <div
      className="
        absolute
        top-20 right-20
        lg:top-24 lg:right-24
        xl:top-28 xl:right-28
        2xl:top-32 2xl:right-32
        z-10
        w-24 lg:w-28 xl:w-30 2xl:w-32
        bg-white rounded-xl shadow-lg p-2
      "
    >
      <h3
        className="
          font-semibold mb-1
          text-[8px]
          lg:text-[9px]
          xl:text-[9px]
          2xl:text-[10px]
        "
      >
        {data.title}
      </h3>

      <h1>
        {title}
      </h1>

      <div
        className="
          space-y-2
          lg:space-y-2.5
          2xl:space-y-3
        "
      >
        {/* FBB */}
        <div className="border border-zinc-200 rounded-lg p-1">
          <div className="flex justify-between items-center">
            <span className="text-[6px] 2xl:text-[8px]">FBB</span>

            <span
              className={`
                rounded-xl px-1
                lg:px-1.5 2xl:px-2
                text-[6px] lg:text-[7px] 2xl:text-[8px]
                ${statusClass(data.fbb?.status)}
              `}
            >
              {data.fbb?.status ?? "-"}
            </span>
          </div>

          <div className="flex gap-1 2xl:gap-3 mt-1">
            <p className="text-gray-500 flex items-center gap-1 text-[6px] 2xl:text-[8px]">
              <Users className={iconClass} />
              {data.fbb?.users ?? "-"}
            </p>

            <p className="text-gray-500 flex items-center gap-1 text-[5px] 2xl:text-[8px]">
              <MessageCircleWarning className={iconClass} />
              {data.fbb?.issue ?? "-"}
            </p>
          </div>
        </div>

        {/* MBB */}
        <div className="border border-zinc-200 rounded-lg p-1">
          <div className="flex justify-between items-center">
            <span className="text-[6px] 2xl:text-[8px]">MBB</span>

            <span
              className={`
                rounded-xl px-1
                lg:px-1.5 2xl:px-2
                text-[6px] lg:text-[7px] 2xl:text-[8px]
                ${statusClass(data.mbb?.status)}
              `}
            >
              {data.mbb?.status ?? "-"}
            </span>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <p className="text-gray-500 flex items-center gap-1 text-[6px] 2xl:text-[8px]">
              <Users className={iconClass} />
              {data.mbb?.users ?? "-"}
            </p>

            <p className="text-gray-500 flex items-center gap-1 text-[6px] 2xl:text-[8px]">
              <MessageCircleWarning className={iconClass} />
              {data.mbb?.issue ?? "-"}
            </p>

            <p className="text-red-500 flex items-center gap-1 text-[6px] 2xl:text-[8px]">
              <Gauge className={`${iconClass} text-gray-500`} />
              <MoveDown
                className="
                  w-1.5 h-1.5
                  lg:w-2 lg:h-2
                  2xl:w-[7px] 2xl:h-[7px]
                  text-red-500
                "
              />
              {data.mbb?.speed ?? "-"} Mbps
              <span className="text-gray-500 text-[6px] 2xl:text-[8px]">
                ({data.mbb?.speedPercent ?? "-"}%)
              </span>
            </p>
          </div>
        </div>
      </div>

      <button
        className="
          mt-1 w-full text-blue-600
          text-[8px] lg:text-[9px] 2xl:text-[10px]
        "
      >
        See Detail →
      </button>
    </div>
  );
};

export default PopupInfo;
