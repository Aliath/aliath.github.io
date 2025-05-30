"use client";
import { Cursor } from "@/components/motion-primitives/cursor";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Link href="/">
      <header className="group mb-8 inline-flex flex-row gap-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 -m-2 rounded-lg">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          className="left-1 top-1"
        >
          <MousePointerClick className="transition-all size-8 group-active:size-12" />
        </Cursor>
        <div className="rounded-lg overflow-hidden">
          <Image src="/me.jpeg" alt="Me" width={48} height={48} />
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-black dark:text-white">Bart Słysz</p>
          <TextEffect
            as="p"
            className="text-zinc-600 dark:text-zinc-500 text-sm"
            speedSegment={1}
          >
            Software Engineer
          </TextEffect>
        </div>
      </header>
    </Link>
  );
}
