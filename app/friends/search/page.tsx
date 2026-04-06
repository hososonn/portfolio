"use client";

import { useEffect, useMemo } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/notesnlives-%E3%83%90%E3%83%B3%E3%83%89%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/id6756487053";

export default function FriendsSearchDeepLinkPage() {
  const inviteUid = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams(window.location.search);
    return params.get("inviteUid") ?? "";
  }, []);

  useEffect(() => {
    const schemeUrl = inviteUid
      ? `livecollect://friends/search?inviteUid=${encodeURIComponent(inviteUid)}`
      : "livecollect://friends/search";

    // Try app open first.
    window.location.href = schemeUrl;

    // Fallback to App Store if the app is not installed.
    const timer = window.setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [inviteUid]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-center text-zinc-700 dark:bg-black dark:text-zinc-300">
      <div>
        <p className="mb-2 text-lg font-semibold">Notes&apos;n&apos;Lives を開いています...</p>
        <p className="text-sm">開かない場合は App Store に移動します。</p>
      </div>
    </main>
  );
}
