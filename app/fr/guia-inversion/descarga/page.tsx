import type { Metadata } from "next";
import GuideDownload from "@/components/GuideDownload";

export const metadata: Metadata = {
  title: "Cabinet Legal",
  robots: { index: false, follow: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ t?: string | string[] }>;
}) {
  const { t } = await searchParams;
  return <GuideDownload lang="fr" token={typeof t === "string" ? t : undefined} />;
}
