import { Typography, Card } from "@material-tailwind/react";

export default function RestCards() {
  return (
    <section className="max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-16 gap-8 my-10">
      <Card className="bg-transparent rounded-2xl flex-col justify-between">
        <div className="absolute h-full w-full top-0 left-0 bg-[#E4DAFF] -z-10 rounded-lg" />
        <div className="p-6">
          <Typography variant="h3" color="black">
            Kraken and Kraken Elite
          </Typography>
          <Typography variant="h6" className="font-normal">
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
            className="rounded-lg"
          />
        </div>
      </Card>
      <Card className="bg-transparent rounded-2xl flex-col justify-between">
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-indigo-200 from-10% to-blue-800 -z-10 rounded-lg" />
        <div className="p-6">
          <Typography variant="h3" color="black">
            RGB Core Fans
          </Typography>
          <Typography variant="h6" className="font-normal">
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
          <img src="latest/rgb.png" alt="Kraken Fans" className="rounded-lg" />
        </div>
      </Card>
    </section>
  );
}
