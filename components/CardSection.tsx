import Image from "next/image";
import PageContainer from "@/components/PageContainer";

type Card = {
  title: string;
  description: string;
  image: string;
  gradient: string;
};

const cards: Card[] = [
  {
    title: "Get Care",
    description:
      "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications.",
    image: "/images/card-get-care.png",
    gradient: "linear-gradient(137deg, #002CCC 8%, rgba(0, 22, 102, 0.36) 98%)",
  },
  {
    title: "Get Involved",
    description:
      "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications.",
    image: "/images/card-get-involved.png",
    gradient: "linear-gradient(136deg, #00C918 0%, rgba(0, 99, 12, 0.32) 88%)",
  },
  {
    title: "Donate Now",
    description:
      "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications.",
    image: "/images/card-donate.png",
    gradient: "linear-gradient(131deg, #F57A38 0%, rgba(143, 71, 33, 0) 100%)",
  },
];

export default function CardSection() {
  return (
    <section className=" py-16">
      <PageContainer className="flex flex-col gap-8 md:flex-row">
        {cards.map((card) => (
          <article
            key={card.title}
            className="relative h-[405px] min-w-0 max-w-[392px] flex-1 overflow-hidden rounded-2xl"
          >
            <Image src={card.image} alt="" fill className="object-cover" sizes="392px" />
            <div className="absolute inset-0" style={{ background: card.gradient }} />
            <div className="relative flex h-full flex-col px-6 pb-6 pt-8 text-white">
              <h3 className="font-heading text-[50px] leading-none">{card.title}</h3>
              <p className="mt-[9px] max-w-[304px] text-base leading-normal">{card.description}</p>
              <button
                type="button"
                className="absolute bottom-10 right-6 h-[51px] w-fit rounded-lg border border-white bg-white/20 px-6 text-base font-medium backdrop-blur-[57px] transition hover:bg-white/30"
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </PageContainer>
    </section>
  );
}
