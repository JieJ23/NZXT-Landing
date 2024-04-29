import { Typography, Card, Button } from "@material-tailwind/react";

export function Wrapper({ children }) {
  return (
    <section className="grid grid-cols-12 px-6 lg:px-20 mx-auto gap-5 my-10 max-w-[1300px] place-content-center">
      {children}
    </section>
  );
}

export default function RestCards() {
  return (
    <>
      <Wrapper>
        <Card className="col-span-12 md:col-span-6 bg-transparent rounded-2xl flex-col justify-between">
          <div className="absolute h-full w-full top-0 left-0 bg-[#E4DAFF] -z-10 rounded-lg" />
          <div className="pt-6 px-6">
            <Typography variant="h3" color="black">
              Kraken and Kraken Elite
            </Typography>
            <Typography variant="h6" className="font-normal" color="black">
              High-performance cooling with a customizable LCD screen with our
              all-new Kraken Series.
            </Typography>
            <a href="#">
              <Typography className="my-4 font-normal" color="purple">
                Shop The New Krakens
              </Typography>
            </a>
          </div>
          <div>
            <img
              src="latest/kraken.png"
              alt="Kraken Fans"
              className="rounded-lg w-full h-full"
            />
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-6 bg-transparent rounded-2xl flex-col justify-between">
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-indigo-200 from-10% to-blue-800 -z-10 rounded-lg" />
          <div className="pt-6 px-6">
            <Typography variant="h3" color="black">
              RGB Core Fans
            </Typography>
            <Typography variant="h6" className="font-normal" color="black">
              The F Series RGB Core Fans offer brilliant lighting and premium
              cooling.
            </Typography>
            <a href="#">
              <Typography className="my-4 font-normal" color="purple">
                Shop Core Fans
              </Typography>
            </a>
          </div>
          <div>
            <img
              src="latest/rgb.png"
              alt="Kraken Fans"
              className="rounded-lg w-full h-full"
            />
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card className="flex justify-center items-center flex-col lg:flex-row col-span-12 bg-[#C7D9FF] rounded-lg">
          <div className="absolute h-full w-full top-0 right-0 bg-[url('/latest/relay_audio.png')] bg-center rounded-lg" />
          <div className="flex-1 lg:w-1/2 p-8 my-8 mr-7 z-20">
            <Typography color="black" className="text-3xl font-bold">
              Relay Audio
            </Typography>
            <Typography color="black" className="font-normal text-lg">
              Switch from Hi-Res Audio to room-filling sound in a instant.
            </Typography>
            <Button className="my-2" variant="filled" color="purple">
              Shop Relay Audio
            </Button>
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card className="col-span-12 md:col-span-6 bg-transparent rounded-2xl flex-col justify-between max-h-[600px]">
          <div className="absolute h-full w-full top-0 left-0 bg-[#131111] -z-10 rounded-lg" />
          <div className="pt-6 px-6">
            <Typography variant="h3" color="white">
              H5 Flow RGB & H7 Flow RGB
            </Typography>
            <Typography variant="h6" className="font-normal" color="white">
              The brighter side of the H Series.
            </Typography>
            <div className="flex gap-6">
              <a href="#">
                <Typography className="my-4 font-normal" color="white">
                  H5 Flow RGB
                </Typography>
              </a>
              <a href="#">
                <Typography className="my-4 font-normal" color="white">
                  H7 Flow RGB
                </Typography>
              </a>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="latest/cases.png"
              alt="Kraken Fans"
              className="rounded-lg w-full h-full"
            />
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-6 bg-transparent rounded-2xl flex-col justify-between max-h-[600px]">
          <div className="absolute h-full w-full top-0 left-0 bg-[#000] -z-10 rounded-lg" />
          <div className="pt-6 px-6">
            <Typography variant="h3" color="white">
              Capsule Mini
            </Typography>
            <Typography variant="h6" className="font-normal" color="white">
              Capture unexpectedly big sound on the excitingly small Capsule
              Mini.
            </Typography>
            <div className="flex gap-6">
              <a href="#">
                <Typography className="my-4 font-normal" color="white">
                  Capsule Mini
                </Typography>
              </a>
              <a href="#">
                <Typography className="my-4 font-normal" color="white">
                  Boom Arm Mini
                </Typography>
              </a>
            </div>
          </div>
          <div>
            <img
              src="latest/capsule.png"
              alt="Kraken Fans"
              className="rounded-lg w-full h-full"
            />
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card className="col-span-12 md:col-span-4 bg-transparent rounded-2xl flex-col justify-between bg-gray-200">
          <div className="flex-1 h-full">
            <img
              src="latest/motherboard.png"
              alt="Kraken Fans"
              className="rounded-lg"
            />
          </div>
          <div className=" flex-1 h-full p-6 text-center flex flex-col justify-between">
            <Typography variant="h3" color="black">
              N7 Motherboard
            </Typography>
            <Typography color="black" className="text-lg">
              ATX Motherboards with Full Cover, CAM Controls, and Wi-Fi
            </Typography>
            <a href="#">
              <Typography className="my-4 font-normal text-lg" color="purple">
                Shop Motherboards
              </Typography>
            </a>
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-4 bg-transparent rounded-2xl flex-col justify-between bg-gray-200">
          <div className="flex-1 h-full">
            <img
              src="latest/psu.png"
              alt="Kraken Fans"
              className="rounded-lg"
            />
          </div>
          <div className=" flex-1 h-full p-6 text-center flex flex-col justify-between">
            <Typography variant="h3" color="black">
              C1000 PSU
            </Typography>
            <Typography color="black" className="text-lg">
              Ideal for PCs that have multiple GPUs and high-performance CPUs.
            </Typography>
            <a href="#">
              <Typography className="my-4 font-normal text-lg" color="purple">
                Shop C1000 Gold
              </Typography>
            </a>
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-4 bg-transparent rounded-2xl flex-col justify-between bg-gray-200">
          <div className="flex-1 h-full">
            <img
              src="latest/cards.png"
              alt="Kraken Fans"
              className="rounded-lg"
            />
          </div>
          <div className=" flex-1 h-full p-6 text-center flex flex-col justify-between">
            <Typography variant="h3" color="black">
              Capture Cards
            </Typography>
            <Typography color="black" className="text-lg">
              Plug-and-play with ultra-low latency streaming in HD & 4K.
            </Typography>
            <a href="#">
              <Typography className="my-4 font-normal text-lg" color="purple">
                Shop Capture Cards
              </Typography>
            </a>
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card className="col-span-12 bg-[url('/latest/bannerbg.png')] bg-center m-2 rounded-lg flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 my-6 ml-5">
            <img src="/latest/screen_header.png" alt="Bigscreen and NZXT" />
            <Typography color="white" className="text-4xl font-serif">
              The Complete VR Experience
            </Typography>
            <Typography color="white" className="text-lg">
              Power your VR experience with machines built to enhance your
              gameplay.
            </Typography>
            <a href="#">
              <Typography color="white" className="my-4">
                Learn More
              </Typography>
            </a>
          </div>
          <div className="h-full flex-1">
            <img
              src="latest/primarybanner.png"
              alt="Sales Primary"
              className="object-contain h-full"
            />
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card className="col-span-12 bg-blue-100 bg-center m-2 rounded-lg flex flex-col md:flex-row items-center p-8 gap-6">
          <div className="flex-1">
            <img src="/latest/business_header.png" alt="Bigscreen and NZXT" />
            <Typography color="black" className="text-3xl font-semibold">
              Unlock Your Team's Potential
            </Typography>
            <Button className="my-2" color="purple">
              <a href="#" className="">
                <Typography color="white">Learn More</Typography>
              </a>
            </Button>
          </div>
          <div className="h-full flex-1">
            <img
              src="latest/promo_primary.png"
              alt="Sales Primary"
              className="object-contain h-full"
            />
          </div>
        </Card>
      </Wrapper>
    </>
  );
}
