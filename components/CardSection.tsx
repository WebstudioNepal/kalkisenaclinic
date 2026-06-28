"use client";

import { useState } from "react";
import Image from "next/image";
import CardLearnMoreModal from "@/components/CardLearnMoreModal";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";

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
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-6 sm:py-8">
        <PageContainer className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-stretch">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative aspect-392/405 w-full min-w-0 overflow-hidden rounded-2xl md:max-w-[392px] md:flex-1"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 392px"
              />
              <div className="absolute inset-0" style={{ background: card.gradient }} />
              <div className="relative flex h-full flex-col px-5 pb-5 pt-6 text-white sm:px-6 sm:pb-6 sm:pt-8">
                <h3 className="font-heading text-[36px] leading-none sm:text-[42px] md:text-[50px]">
                  {card.title}
                </h3>
                <p className="mt-2 max-w-none text-base leading-normal sm:mt-[9px] sm:max-w-[304px]">
                  {card.description}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setPopupOpen(true)}
                  className="mt-auto ml-auto h-[51px] border-white bg-white/20 px-6 text-base font-medium text-white backdrop-blur-[57px] hover:bg-white/30 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </PageContainer>
      </section>

      <CardLearnMoreModal open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
