import { Typography, Card, Button, Rating } from "@material-tailwind/react";
import { Wrapper } from "./RestCards";

const allPCOptions = [
  {
    name: "Player: One",
    product: "H5 Elite Gaming PC with RTX 3050 or RTX 4060 GPU",
    cpu: "Intel® Core™ i5-12400F",
    gpu: "NVIDIA® GeForce RTX™ 3050 or NVIDIA® GeForce RTX™ 4060",
    price: "799",
    img: "player1.png",
    rating: 423,
  },
  {
    name: "Player: Two",
    product: "H6 Flow RTX 4070 Gaming PC",
    cpu: "AMD Ryzen™ 5 7600X",
    gpu: "NVIDIA® GeForce RTX™ 4070",
    price: "1,599",
    img: "player2.png",
    rating: 524,
  },
  {
    name: "Player: Three",
    product: "H7 Elite RTX 4070 Ti Gaming PC",
    cpu: "Intel® Core™ i7-13700KF",
    gpu: "NVIDIA® GeForce RTX™ 4070 Ti",
    price: "2,299",
    img: "player3.png",
    rating: 223,
  },

  {
    name: "Player: One Prime",
    product: "H5 Elite Gaming PC with RTX 3050 or RTX 4060 GPU",
    cpu: "Intel® Core™ i5-12400F",
    gpu: "NVIDIA® GeForce RTX™ 4060 Ti 8GB",
    price: "1,249",
    img: "player1prime.png",
    type: "prime",
    rating: 124,
  },
  {
    name: "Player: Two Prime",
    product: "H6 Flow RTX 4070 Gaming PC",
    cpu: "AMD Ryzen™ 7 7700X",
    gpu: "NVIDIA® GeForce RTX™ 4070 Ti",
    price: "2,099",
    img: "player2prime.png",
    type: "prime",
    rating: 152,
  },
  {
    name: "Player: Three Prime",
    product: "H7 Elite RTX 4070 Ti Gaming PC",
    cpu: "Intel® Core™ i9-14900KF",
    gpu: "NVIDIA® GeForce RTX™ 4090",
    price: "3,699",
    img: "player3prime.png",
    type: "prime",
    rating: 89,
  },
];

function CardPC({ product, name, cpu, gpu, price, img, type, rating }) {
  return (
    <Card className="col-span-6 md:col-span-4" shadow={false}>
      <img
        src={`/PC/${img}`}
        alt="Player 1 PC"
        className={
          type === "prime"
            ? `bg-gradient-to-b from-black to-gray-400`
            : "bg-gray-400"
        }
      />
      <div className="w-full h-full flex flex-col justify-between mt-4">
        <Typography className="font-bold" variant="h6" color="black">
          {name}
        </Typography>
        <Typography className="font-normal" variant="small">
          {product}
        </Typography>
        <div className="flex items-center">
          <Rating value={rating % 2 === 0 ? 4 : 5} readonly />
          <Typography variant="small" className="">{`(${rating})`}</Typography>
        </div>
        <div className="border-y-2 py-6">
          <Typography variant="small" className="font-bold">
            Key Specs
          </Typography>
          <Typography variant="small">Windows 11 Home</Typography>
          <Typography variant="small">{cpu}</Typography>
          <Typography variant="small">{gpu}</Typography>
        </div>
        <Typography className="font-normal py-4" variant="small">
          {`$${price}.00`}
        </Typography>
        <Button className="bg-indigo-600">SHOP</Button>
      </div>
    </Card>
  );
}

export default function PCSelections() {
  return (
    <>
      <Wrapper>
        <div className="col-span-12 mt-10">
          <Typography className="text-center text-5xl font-bold">
            NZXT Prebuilt Gaming PCs
          </Typography>
          <Typography className="w-full lg:w-1/2 mx-auto text-center text-lg font-normal opacity-60">
            We use the latest generation performance components and
            configurations to get you gaming, fast.
          </Typography>
        </div>
      </Wrapper>

      <Wrapper>
        {allPCOptions.map((obj, index) => (
          <CardPC
            name={obj.name}
            product={obj.product}
            cpu={obj.cpu}
            gpu={obj.gpu}
            price={obj.price}
            img={obj.img}
            key={index}
            type={obj.type}
            rating={obj.rating}
          />
        ))}
      </Wrapper>
    </>
  );
}
