import { PageHome } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function HeroV1(props: NonNullable<PageHome["hero"]>) {
  const { tag, title, description, image } = props;

  return (
    <article>
      <span>{tag}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {image && (
        <Image
          src={urlFor(image).width(1080).height(1080).url()}
          alt={description || ""}
          width={1080}
          height={1080}
        />
      )}
    </article>
  );
}
