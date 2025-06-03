export  function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-xs">
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.15s]"></div>
        <div className="w-5 h-5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.3s]"></div>
      </div>
    </div>
  );
}