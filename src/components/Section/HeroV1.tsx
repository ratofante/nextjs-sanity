import { PageHome } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { LuChevronRight } from "react-icons/lu";

export function HeroV1(props: NonNullable<PageHome["hero"]>) {
  const { tag, title, description, image, cta, steps } = props;

  return (
    <article id="hero-v1" className="container__wide">
      <section className="content">
        {image && (
          <Image
            src={urlFor(image).width(32).height(32).url()}
            alt={description || ""}
            width={32}
            height={32}
            className="hero__logo"
          />
        )}
        <span>{tag}</span>
        <h1>
          {title?.[0] ?? ""}
          <br />
          {title?.[1] ?? ""}
        </h1>
        <p>{description}</p>
        <ButtonPrimary label={cta ?? "Start Now"} />
        <div className="hero__image__wrapper portrait">
          {image && (
            <Image
              src={urlFor(image).width(1080).height(1080).url()}
              alt={description || ""}
              width={1080}
              height={1080}
              className="hero__image"
            />
          )}
        </div>
      </section>
      <section className="steps">
        <ul>
          {steps &&
            steps.map((step, index) => (
              <li className="step" key={index}>
                <button className="button__step" type="button">
                  <span>{index + 1}</span>
                  <p>{step.title}</p>
                </button>
                <article>
                  <header>
                    <h3>
                      <span>{index + 1}</span>
                      {step.title}
                    </h3>
                  </header>
                  <p>{step.description}</p>
                  <button>
                    Go to section
                    <LuChevronRight width={24} height={24} />
                  </button>
                </article>
              </li>
            ))}
        </ul>
        <div className="hero__image__wrapper">
          {image && (
            <Image
              src={urlFor(image).width(1080).height(1080).url()}
              alt={description || ""}
              width={1080}
              height={1080}
              className="hero__image"
            />
          )}
        </div>
      </section>
    </article>
  );
}
