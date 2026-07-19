const ErrorState = ({ message = "Gagal memuat data" }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
    <p className="text-xs text-red-500 font-medium">{message}</p>
    <p className="text-[10px] text-zinc-400">Coba refresh halaman atau cek koneksi kamu</p>
  </div>
);

export default ErrorState;