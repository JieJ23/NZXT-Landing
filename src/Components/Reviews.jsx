import { Typography, Card } from "@material-tailwind/react";

const allReviews = [
  {
    company: "review3.png",
    review: `“Offering real-world performance data is a great idea, and makes the process of ordering a PC much less abstract for newcomers.”`,
  },
  {
    company: "review2.png",
    review: `“There’s something lovely about having a PC that comes with a set of guaranteed predicted frames-per-second targets for the games I planned.”`,
  },
  {
    company: "review1.png",
    review: `“This is certainly a very neat idea, and the company is putting its money where its mouth is regarding the frame-rate estimations.”`,
  },
];

function CardTempate({ obj }) {
  return (
    <Card className="flex flex-col px-4 py-10 bg-gray-200">
      <div className="flex-1">
        <img
          src={`/Reviews/${obj.company}`}
          alt="Reviews"
          className="w-[200px] mx-auto"
        />
      </div>
      <Typography className="flex-1 text-center">{obj.review}</Typography>
    </Card>
  );
}

export default function Reviews() {
  return (
    <section className="w-full p-6 pt-20 lg:px-24">
      <Typography variant="h1" className="text-center">
        What Others Say
      </Typography>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {allReviews.map((obj, index) => (
          <CardTempate obj={obj} key={index} />
        ))}
      </section>
    </section>
  );
}
