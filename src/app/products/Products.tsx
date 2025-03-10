"use client";

import React from "react";
import cl from "./Products.module.scss";
import Image from "next/image";

const Products = () => {
  // const { push, replace } = useRouter();

  // push("/products/1");
  // replace("/products/2");

  // const path = usePathname();
  // const params = useSearchParams();

  return (
    <div className={cl.products}>
      <Image src="/next.svg" width={200} height={50} alt="next image" />
    </div>
  );
};

export default Products;
