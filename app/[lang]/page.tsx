import { HeroParallax } from "@/components/ui/hero-parallax";
import { projectsHero } from "@/lib/data";
import { Dictionary } from "@/lib/types";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log(lang);
  const dictionary: Dictionary = await import(
    `@/app/dictionaries/${lang}`
  ).then((m) => m.default);
  return <HeroParallax products={projectsHero} dictionary={dictionary} />;
}
