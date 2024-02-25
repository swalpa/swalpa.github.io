import React from "react";

const SheetWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex justify-center bg-slate-50 p-2 md:p-5 min-h-[85vh] text-black/80 ">
      <div
        className="w-full md:w-4/5 md:min-w-[724px] lg:w-3/4 lg:min-w-[850px] xl:w-3/5 xl:min-w-[1000px]  bg-white border border-black/10 min-h-screen 
          rounded-sm p-2 lg:p-6 px-4 lg:px-10 lg:text-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      >
        {children}
      </div>
    </main>
  );
};

export default SheetWrapper;
