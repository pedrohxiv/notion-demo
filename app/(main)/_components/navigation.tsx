"use client";

export const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div>
          <p className="">Action items</p>
        </div>
        <div className="mt-4">
          <p className="">Documents</p>
        </div>
        <div className="opacity-0" />
      </aside>
    </>
  );
};