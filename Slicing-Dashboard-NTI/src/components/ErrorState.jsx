import { CircleAlert } from "lucide-react";

const ErrorState = ({ message = "Gagal memuat data" }) => (
  <div className="font-geist flex flex-col items-center justify-center gap-2 py-8 px-2 text-center h-full border border-gray-100 rounded-xl">

    <CircleAlert />
    <p className="text-xs text-red-500 font-medium">{message}</p>
    
  </div>
);

export default ErrorState;