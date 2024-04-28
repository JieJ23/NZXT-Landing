import { Typography, Card } from "@material-tailwind/react";

export default function Heroes2() {
  return (
    <section className="w-full bg-transparent h-[70%] flex flex-col relative my-10">
      <div className="absolute h-full w-full top-0 left-0 bg-black xl:bg-[url('heroes/hero2-bg.png')] xl:bg-cover xl:bg-no-repeat xl: -z-10" />

      <div className="basis-1/2 z-20 px-4 py-8 xl:py-64 xl:px-40 xl:w-1/2">
        <img src="heroes/hero2-header.png" alt="Heroes 2" />
        <Typography color="white" variant="h4">
          PRIME TIME
        </Typography>
        <Typography color="white" className="font-normal">
          Player: Prime variants include an upgraded GPU, CPU and the latest
          NZXT PC cases, for maximum performance and style. Take your gaming to
          the next level with Player: Prime.
        </Typography>
        <a href="#">
          <Typography color="white" className=" my-4">
            Shop Player: Three Prime
          </Typography>
        </a>
      </div>

      <img
        src="/heroes/hero2-bg.png"
        alt="Heroes 2"
        className="object-contain block xl:hidden"
      />
    </section>
  );
}
