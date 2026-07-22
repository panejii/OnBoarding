import { useState } from "react";
import { Users, TicketX } from 'lucide-react'

const rankLabel = (rank) => {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}th`;
};

const BottomPanel = ({ grids }) => {
  const [tab, setTab] = useState("mostConcern"); // mostConcern | problemDevice

  const items = grids?.[tab] ?? [];

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-md p-2 z-10">

      <div className="flex gap-1 mb-2">
        <button
          onClick={() => setTab("mostConcern")}
          className={`px-2 py-1 2xl:py-2 rounded-lg text-[6px] 2xl:text-[10px] ${
            tab === "mostConcern" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Most Concern Grid
        </button>

        <button
          onClick={() => setTab("problemDevice")}
          className={`px-4 py-1 2xl:py-2 rounded-lg text-[6px] 2xl:text-[10px] ${
            tab === "problemDevice" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Problem Device
        </button>
      </div>

      <div className="grid grid-cols-5 gap-1">

        {items.map((item) => (
          <div
            key={item.rank}
            className="border rounded-lg p-1"
          >
            <p className="text-[6px]
            lg:text-[7px]
            xl:text-[7px]
            2xl:text-[8px] text-gray-500">
              {rankLabel(item.rank)}
            </p>

            <h4 className="font-medium text-[8px]
            lg:text-[10px]
            xl:text-[11px]
            2xl:text-xs text-gray-500">
              {item.code}
            </h4>

            <p className="text-[6px]
            lg:text-[7px]
            xl:text-[7px]
            2xl:text-[8px] mt-2 flex gap-1">
                <Users size={9}/>
              {item.users}
            </p>

            <p className="text-[6px]
            lg:text-[7px]
            xl:text-[7px]
            2xl:text-[8px] text-gray-500 flex gap-1">
              <TicketX size={9}/>
              {item.issue}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default BottomPanel;
