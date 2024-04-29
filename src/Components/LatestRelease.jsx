import { Typography, Card, Button, CardBody } from "@material-tailwind/react";

export default function LatestRelease() {
  return (
    <section className="my-10">
      <header className="text-center mb-5">
        <Typography className="text-[30px] lg:text-[48px] font-bold">
          Our Newest Release
        </Typography>
        <Typography className="text-[18px] px-8 w-full lg:w-1/2 mx-auto">
          Unleash the full potential of your gaming rig with NZXT's newest PC
          components, engineered for speed, precision, and unmatched
          reliability.
        </Typography>
      </header>
      <section className="w-full p-6 lg:px-24">
        <Card className="max-w-[1400px] mx-auto py-16">
          <div className="absolute bg-cover h-full w-full top-0 right-0 rounded-md bg-[url('/heroes/latest-h6.png')] bg-center" />
          <CardBody className="z-10 flex lg:flex-row flex-col items-center w-full lg:w-1/2">
            <div className="flex-1 p-8 lg:px-28 lg:py-16">
              <Typography
                color="white"
                variant="h2"
                className="font-bold font-customFont"
              >
                H6
              </Typography>
              <Typography
                color="white"
                variant="h5"
                className="font-customFont my-4"
              >
                A compact design that packs dual-chamber punch-all wrapped up in
                style.
              </Typography>
              <Button
                variant="outlined"
                className="border-2 border-white text-white font-customFont text-[14px]"
              >
                Shop H6 Series
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </section>
  );
}
