import NextHead from "next/head";
import { HeadProps } from "./interfaces";

function Head({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}

export default Head;
