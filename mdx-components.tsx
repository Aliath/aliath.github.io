import type { MDXComponents } from "mdx/types";
import { Geist_Mono } from "next/font/google";
import type { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// biome-ignore lint/style/useNamingConvention: MDX component
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // biome-ignore lint/style/useNamingConvention: component definition
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string;
      alt: string;
      caption: string;
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      );
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
      const codeHtml = highlight(children as string);
      return (
        <code
          // biome-ignore lint/security/noDangerouslySetInnerHtml: _
          dangerouslySetInnerHTML={{ __html: codeHtml }}
          {...props}
          className={`${props.className} ${geistMono.className} font-mono`}
        />
      );
    },
  };
}
