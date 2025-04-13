import { HeroV1 } from "@/components/Section/HeroV1";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_HOME_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const pageHome = await sanityFetch({
    query: PAGE_HOME_QUERY,
  });
  console.log(pageHome);
  return <HeroV1 {...pageHome.data?.hero} />;
}
