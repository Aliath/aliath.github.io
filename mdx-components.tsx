import type { MDXComponents } from "mdx/types";
import { Geist_Mono } from "next/font/google";
import type { ComponentPropsWithoutRef } from "react";
import { highlight, Keywords_Js } from "sugar-high";

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
      width,
      height,
    }: {
      src: string;
      alt: string;
      caption: string;
      width?: number;
      height?: number;
    }) => {
      return (
        <figure>
          <img
            width={width}
            height={height}
            src={src}
            alt={alt}
            className="rounded-xl"
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      );
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
      const codeHtml = highlight(children as string, {
        keywords: new Set([...Keywords_Js, "using"]),
      });
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
