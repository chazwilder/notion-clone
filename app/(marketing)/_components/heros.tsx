import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:w-[350px] sm:h-[350px] dark:invert">
          <Image
            src="/documents.png"
            layout="fill"
            objectFit="contain"
            alt="Docs"
          />
        </div>
        <div className="relative h-[300px] w-[300px] sm:w-[350px] sm:h-[350px] hidden md:block dark:invert">
          <Image
            src="/reading.png"
            layout="fill"
            objectFit="contain"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heros;
