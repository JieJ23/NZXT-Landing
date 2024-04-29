import { Wrapper } from "./RestCards";
import { Typography, Card, Button } from "@material-tailwind/react";

const allInfo = [
  {
    name: `Player: One Prime`,
    title: `H6 Flow RGB RTX 4060 Ti Gaming PC`,
    img: `one.png`,
    price: `1,249`,
  },
  {
    name: `Player: Two Prime`,
    title: `H7 Flow RGB RTX 4070 Ti Gaming PC`,
    img: `two.png`,
    price: `2,099`,
  },
  {
    name: `Player: One`,
    title: `H5 Elite Gaming PC with RTX 3050 or RTX 4060 GPU`,
    img: `three.png`,
    price: `799`,
  },
  {
    name: `Player: Two`,
    title: `H6 Flow RTX 4070 Gaming PC`,
    img: `four.png`,
    price: `1,599`,
  },
  {
    name: `Player PC | 770 Edition`,
    title: `H7 Flow RTX 4070 Gaming PC`,
    img: `five.png`,
    price: `1,699`,
  },
  {
    name: `RGB & Fan Controller`,
    title: `RGB Lighting & Digtally-Controlled Fan Channels`,
    img: `six.png`,
    price: `34.99`,
  },
  {
    name: `Player: Three`,
    title: `H7 Elite 4070 Ti Gaming PC`,
    img: `seven.png`,
    price: `2,299`,
  },
  {
    name: `Kraken 240`,
    title: `240mm AIO Liquid Cooler with LCD Display`,
    img: `eight.png`,
    price: `139.99`,
  },
  {
    name: `Player: Three Prime`,
    title: `H9 Elite 4090 Gaming PC`,
    img: `nine.png`,
    price: `3,699`,
  },
  {
    name: `H6 Flow RGB`,
    title: `Compact Dual-Chamber Mid-Tower Airflow Case with RGB fans`,
    img: `ten.png`,
    price: `134.99`,
  },
  {
    name: `H7 Elite (2022)`,
    title: `Premium Mid-Tower Case`,
    img: `eleven.png`,
    price: `199.99`,
  },
  {
    name: `H5 Flow`,
    title: `Compact Mid-tower Airflow Case`,
    img: `twelves.png`,
    price: `94.99`,
  },
];

function ListingCard({ obj }) {
  return (
    <Card className="col-span-6 md:col-span-4 lg:col-span-3" shadow={false}>
      <div className="bg-gray-200">
        <img src={`/bestsell/${obj.img}`} alt="Product 1" />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <Typography className="text-xl text-black font-semibold">
            {obj.name}
          </Typography>
          <Typography className="text-sm text-blue-gray font-normal">
            {obj.title}
          </Typography>
          <Typography className="text-sm text-[green] font-semibold">
            Free Shipping on all Gaming PCs
          </Typography>
          <Typography className="text-sm text-[green] font-semibold">
            2 Promotions
          </Typography>
        </div>
        <div className="my-4 flex justify-between items-center">
          <Typography className="font-semibold text-black">
            {`$${obj.price}`}
          </Typography>
          <div className="flex gap-2">
            <div className="rounded-full bg-black h-6 w-6"></div>
            <div className="rounded-full bg-gray-400 h-6 w-6"></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function BestSellers() {
  return (
    <>
      <Wrapper>
        <div className="col-span-12 mt-10">
          <Typography className="text-center text-5xl font-bold">
            Shop NZXT Bestsellers
          </Typography>
          <Typography className="w-full lg:w-1/2 mx-auto text-center text-lg font-normal opacity-60">
            Join the thousands of PC gamers who have made NZXT's best-selling PC
            products their go-to choice for top-tier performance, reliability,
            and style.
          </Typography>
        </div>
      </Wrapper>

      <Wrapper>
        {allInfo.map((obj, index) => (
          <ListingCard obj={obj} key={index} />
        ))}
      </Wrapper>

      <Wrapper>
        <Card className="col-span-12 bg-[#4A4AF4] bg-center m-2 rounded-lg flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 my-6 ml-5">
            <img src="/heroes/affirm.png" alt="Bigscreen and NZXT" />
            <Typography color="white" className="text-4xl font-bold">
              Pay Later with Affirm
            </Typography>
            <Typography color="white" className="text-lg">
              Buy now, pay over time. Quick and easy. No hidden fees. Select
              "Affirm monthly payments" during checkout.
            </Typography>
            <a href="#">
              <Typography color="white" className="my-4 font-normal">
                See Terms.
              </Typography>
            </a>
          </div>
          <div className="flex-1">
            <img
              src="/heroes/amazon_deal.png"
              alt="Sales Primary"
              className="object-cover"
            />
          </div>
        </Card>
      </Wrapper>

      <section className="h-full w-full bg-transparent flex justify-center flex-col items-center overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-full bg-[url('/cover/footer.png')] bg-center -z-10" />
        <div className="py-12 px-6 my-24 lg:my-40 lg:p-20">
          <Typography
            color="white"
            className="text-center font-semibold text-md"
          >
            NZXT
          </Typography>
          <Typography
            color="white"
            className="text-center font-semibold text-[30px] lg:text-[48px]"
          >
            Prebuild Power to Love
          </Typography>
          <a href="#">
            <Typography
              color="white"
              className="my-6 text-lg font-semibold text-center"
            >
              Shop Player PCs
            </Typography>
          </a>
        </div>
      </section>
    </>
  );
}
