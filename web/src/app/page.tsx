import { LandingPage } from "@/components/landing/LandingPage";
import type { Language } from "@/components/landing/translations";

type HomeProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

function getLanguage(lang?: string): Language {
  return lang === "hy" ? "hy" : "en";
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : undefined;
  return <LandingPage language={getLanguage(params?.lang)} />;
}
