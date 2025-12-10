"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { Magnetic } from "@/components/ui/magnetic";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowUpRight, ExternalLink, TextCursor } from "lucide-react";
import Link from "next/link";
import {
  BLOG_POSTS,
  EDUCATION_AND_ACTIVITIES,
  EMAIL,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from "./data";
import { motion } from "motion/react";

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <ArrowUpRight className="size-4" />
      </a>
    </Magnetic>
  );
}

export default function Personal() {
  return (
    <motion.main className="space-y-24" initial="hidden" animate="visible">
      <motion.section
        variants={{
          hidden: { opacity: 0, x: 4, y: -4, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on building fast, easy-to-use websites that combine
            cutting-edge UI with smooth coding.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            Passionate about data visualization, building browser tools that
            turn complex data into clear, easy-to-understand visuals &mdash; all
            while keeping things fast and efficient.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={{
          hidden: { opacity: 0, x: -4, y: 4, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="mb-3 text-lg font-medium">
          Blog <TextCursor className="size-3 inline blink" />
        </h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover={true}
            className="h-full w-full rounded-lg bg-zinc-200 dark:bg-zinc-800/80"
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-6 flex flex-col"
                href={post.link}
                data-id={post.uid}
                target={post.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  post.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <div className="grow flex flex-col gap-2">
                    <h4 className="font-normal dark:text-zinc-100">
                      {post.link.startsWith("http") && (
                        <>
                          <ExternalLink className="inline -translate-y-0.5 size-4" />{" "}
                        </>
                      )}
                      {post.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      {post.description}
                    </p>
                  </div>
                  {post.source && (
                    <p className="text-zinc-500 dark:text-zinc-400 min-w-max text-sm">
                      {post.source}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <div>
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative rounded-lg border-1 border-zinc-300/30 dark:border-zinc-600/30 bg-white p-4 dark:bg-zinc-950"
              key={job.id}
            >
              <Spotlight
                className="hidden sm:block bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-zinc-500 dark:to-zinc-100 blur-2xl"
                size={64}
              />
              <div className="relative w-full flex flex-col gap-1">
                <h4 className="font-normal dark:text-zinc-100 mb-4">
                  {job.company}
                </h4>

                {job.entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between gap-8 normal-nums"
                  >
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      {entry.title}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap text-sm">
                      {entry.start} &mdash; {entry.end}
                    </p>
                  </div>
                ))}

                {job.links && (
                  <div className="mt-4 flex text-sm">
                    {job.links.map((link) => {
                      return (
                        <div key={link.href}>
                          <Link
                            className="inline-flex gap-1 items-center hover:underline"
                            href={link.href}
                            key={link.href}
                            target="_blank"
                          >
                            <ExternalLink className="size-4 inline" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-lg font-medium">Education & Activities</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION_AND_ACTIVITIES.map((entry) => (
            <div
              className="relative rounded-lg border-1 border-zinc-300/30 dark:border-zinc-600/30 bg-white p-4 dark:bg-zinc-950"
              key={entry.id}
            >
              <Spotlight
                className="hidden sm:block bg-gradient-to-b from-zinc-500 to-zinc-300 dark:from-zinc-600 dark:to-zinc-800 blur-2xl"
                size={64}
              />
              <div className="relative w-full flex flex-col gap-1">
                <h4 className="font-normal dark:text-zinc-100">
                  {entry.institution}
                </h4>

                <div className="flex items-center justify-between gap-8">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {entry.title}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap text-sm">
                    {entry.start} &mdash; {entry.end}
                  </p>
                </div>

                {entry.links && (
                  <div className="mt-2 text-sm">
                    {entry.links.map((link) => (
                      <Link
                        className="inline-flex gap-1 items-center hover:underline"
                        href={link.href}
                        key={link.href}
                        target="_blank"
                      >
                        <ExternalLink className="size-4 inline" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-lg font-medium">Contact</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{" "}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
