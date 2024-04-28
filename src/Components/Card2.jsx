import { CardTemp } from "./Card1";

const cardInfo = {
  header: "hero-header2.png",
  title: "Into the Starfield",
  sub: `Deck out your desk with limited edition Starfield gear.`,
  button: `Shop Now`,
  bg: `hero-bg2.png`,
  bgimg: `hero-img2.png`,
};

export default function Card2() {
  return (
    <section className="w-full p-6 lg:px-24">
      <CardTemp obj={cardInfo} />
    </section>
  );
}
