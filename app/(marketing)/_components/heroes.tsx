import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            alt="Documents"
            className="object-contain dark:hidden"
            fill
            src="/documents.png"
          />
          <Image
            alt="Documents"
            className="object-contain hidden dark:block"
            fill
            src="/documents-dark.png"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            alt="Reading"
            className="object-contain dark:hidden"
            fill
            src="/reading.png"
          />
          <Image
            alt="Reading"
            className="object-contain hidden dark:block"
            fill
            src="/reading-dark.png"
          />
        </div>
      </div>
    </div>
  );
};
