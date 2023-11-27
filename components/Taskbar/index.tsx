import Image from "next/image";

type Props = {};

const TaskBar = (props: Props) => {
  return (
    <div className="w-full text-lg fixed bottom-0 left-0 bg-gradient-to-b from-[#307be5] to-[#1841a5] flex tahoma">
      <button className="p-2">Start</button>
      <div className="w-full p-2">Open Windows</div>
      <div className="p-2 bg-[#1285DF] flex min-w-[6vw] items-center gap-4">
        <div className="w-[20px] h-[20px] relative">
          <Image src="/icons/202.ico" fill alt="Help Image" />
        </div>
        <button className="text-white">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
