export default function Heading({ children }: { children: string }) {
  return (
    <div className="flex space-x-4 items-center mb-3">
      <h1 className=" text-xl lg:text-2xl text-white">{children}</h1>
      <div className=" h-[2px] w-[20%] bg-primary"> </div>
    </div>
  );
}
