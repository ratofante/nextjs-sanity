import { Author } from "@/components/Blog/Author";
import { Categories } from "@/components/Blog/Categories";
import { components } from "@/sanity/PortableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/Blog/PublishedAt";
import { Title } from "@/components/Blog/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article>
      <header>
        <div>
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure>
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
        </figure>
      ) : null}
      {body ? (
        <div>
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
