import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const cardInfo = {
  header: "hero-intel.png",
  title: "Subscribe to our most popular PC for $99/mo",
  sub: `Get into PC gaming with no commitment supported by award-winning
  customer service and a lifetime warranty.`,
  button: `Subcribe`,
  bg: `hero-bg1.png`,
  bgimg: `hero-img1.png`,
};

export function CardTemp({ obj }) {
  return (
    <Card className="max-w-[1400px] mx-auto">
      <div
        className="absolute bg-top bg-cover h-full w-full top-0 right-0 rounded-md"
        style={{ backgroundImage: `url(/heroes/${obj.bg})` }}
      />
      <CardBody className="z-10 flex lg:flex-row flex-col p-0 items-center">
        <div className="flex-1 p-8 lg:px-28 lg:py-16">
          <img
            src={`/heroes/${obj.header}`}
            alt="NZXT/Intel"
            loading="lazy"
            width={200}
            className="my-2 "
          />
          <Typography
            color="white"
            variant="h4"
            className="font-bold font-customFont tracking-tighter leading-6"
          >
            {obj.title}
          </Typography>
          <Typography
            color="white"
            variant="h6"
            className="font-customFont my-4"
          >
            {obj.sub}
          </Typography>
          <Button
            variant="outlined"
            className="border-2 border-white text-white font-customFont"
          >
            {obj.button}
          </Button>
        </div>
        <div className="flex-1 mx-auto overflow-hidden">
          <img
            src={`/heroes/${obj.bgimg}`}
            alt="NZXT PC"
            className="bg-contain"
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default function Cards() {
  return (
    <section className="w-full p-6 lg:px-24">
      <CardTemp obj={cardInfo} />
    </section>
  );
}
