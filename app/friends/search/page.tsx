"use client";

import { useEffect } from "react";

export default function FriendsSearchDeepLinkPage() {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const inviteUid = q.get("inviteUid") || q.get("u") || "";
    const target = inviteUid
      ? `/invite?inviteUid=${encodeURIComponent(inviteUid)}`
      : "/invite";
    window.location.replace(target);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-center text-zinc-700 dark:bg-black dark:text-zinc-300">
      <div>
        <p className="mb-2 text-lg font-semibold">招待ページに移動しています...</p>
        <p className="text-sm">自動で移動しない場合は再読み込みしてください。</p>
      </div>
    </main>
  );
}
