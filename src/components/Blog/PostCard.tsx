import { Author } from "@/components/Blog/Author";
import { Categories } from "@/components/Blog/Categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/Blog/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories } = props;

  return (
    <Link href={`/posts/${props.slug!.current}`}>
      <article>
        <div>
          <Categories categories={categories} />
        </div>
        <div>
          <h2>
            <span>{title}</span>
            <span />
          </h2>
          <div>
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div>
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={mainImage.alt || title || ""}
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
}
