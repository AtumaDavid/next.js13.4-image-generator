import React from "react";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "../../../components/bootstrap";

export const metadata = {
  title: "Incremental Staic Regeneration - NextJS 13.4 Image Gallery",
};

export const revalidate = 15; //isr page for 15seconds

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImage = await response.json();

  //calculating width and height.
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetches data dynamically</strong>. Every time you
        refresh the page, you get a new image from the Unsplash API.
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
