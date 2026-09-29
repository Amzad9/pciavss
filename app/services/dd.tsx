"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <>
      {/* Meta-refresh fallback for non-JS environments */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/" />
      </noscript>
    </>
  );
}
