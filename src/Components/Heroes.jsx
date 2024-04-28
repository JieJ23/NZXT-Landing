import { Typography } from "@material-tailwind/react";

export default function Heroes() {
  return (
    <section className="h-full w-full bg-black flex justify-center flex-col items-center overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full w-full bg-[url('hero-bg.png')] -z-10" />
      <div className="lg:px-6 pb-12 pt-8 w-3/4">
        <div className="flex justify-center">
          <img src="/cover/hero-header.png" alt="NZXT" />
        </div>
        <Typography
          color="white"
          className="text-center font-semibold text-[30px] lg:text-[48px]"
        >
          SUPER Fast. SUPER Powered.
        </Typography>
        <Typography
          color="white"
          className="font-semibold text-[20px] lg:text-[30px] text-center"
        >
          GeForce RTX™ 40 SUPER Series
        </Typography>

        <div>
          <a href="https://nzxt.com/partner/nvidia-geforce-rtx-40-super-series-gpus">
            <Typography
              color="white"
              variant="h5"
              className="border-2 font-semibold rounded-md mt-2 p-2 text-center w-[250px] mx-auto"
            >
              Shop 40 Super Series
            </Typography>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center mt-2">
        <img
          src="/cover/hero-img.png"
          alt="NZXT 40 Series"
          className="object-contain"
        />
      </div>
    </section>
  );
}
