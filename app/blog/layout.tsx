"use client";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextMorph } from "@/components/ui/text-morph";
import type React from "react";
import { useEffect, useState } from "react";
import Script from "next/script";

function CopyButton() {
  const [text, setText] = useState("Copy");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    setTimeout(() => {
      setText("Copy");
    }, 2000);
  }, []);

  return (
    <button
      onClick={() => {
        setText("Copied");
        navigator.clipboard.writeText(currentUrl);
      }}
      className="cursor-pointer p-2 font-base flex items-center gap-1 text-center text-sm text-zinc-500 hover:text-zinc-700 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  );
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-zinc-600 dark:bg-[#7aa2f7]"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>
      <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium text-justify">
        {children}
      </main>
    </>
  );
}
