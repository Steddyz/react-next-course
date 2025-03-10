import React from "react";
import Products from "./Products";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Статическая СЕО
export const metadata: Metadata = {
  title: "Products",
};

// динамическая СЕО
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug };
// }): Promise<Metadata> {
//   const product = await getData(slug);
//   return { title: product.title };
// }

const fetchData = async () => {
  const response = await fetch("https://api.example.com/products", {
    cache: "force-cache",
    next: {
      revalidate: 3600, // 1 hours
    },
  });
  const data = response.json();
  return data;
};

const page = async () => {
  const data = await fetchData();
  if (!data) notFound();

  return (
    <div>
      <Products />
    </div>
  );
};

export default page;
