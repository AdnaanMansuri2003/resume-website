import type { Metadata } from "next";
import ResumeSheet from "@/components/ResumeSheet";
import { profile } from "@/lib/data";
import "../print.css";

export const metadata: Metadata = {
  title: "Résumé — one page",
  description: `Printable one-page résumé for ${profile.name}.`,
  robots: { index: false, follow: false },
};

export default async function OnePageResumePage({
  searchParams,
}: {
  searchParams: Promise<{ pdf?: string }>;
}) {
  const { pdf } = await searchParams;
  return <ResumeSheet variant="short" forPdf={pdf === "1"} />;
}
