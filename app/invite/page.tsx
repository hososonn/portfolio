"use client";

import { useEffect, useMemo } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/notesnlives-%E3%83%90%E3%83%B3%E3%83%89%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/id6756487053";

export default function InvitePage() {
  const inviteUid = useMemo(() => {
    if (typeof window === "undefined") return "";
    const q = new URLSearchParams(window.location.search);
    return q.get("inviteUid") || q.get("u") || "";
  }, []);

  const appUrl = useMemo(() => {
    return `livecollect://friends/search?inviteUid=${encodeURIComponent(inviteUid)}`;
  }, [inviteUid]);

  const isXInApp = useMemo(() => {
    if (typeof window === "undefined") return false;
    const ua = window.navigator.userAgent || "";
    return /Twitter|X\/|x\.com/i.test(ua);
  }, []);

  useEffect(() => {
    if (isXInApp) return;
    const timer = window.setTimeout(() => {
      window.location.href = appUrl;
    }, 250);
    return () => window.clearTimeout(timer);
  }, [appUrl, isXInApp]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
      <div className="w-full max-w-[460px]">
        <h1 className="mb-2 text-[28px] font-bold">Notes&apos;n&apos;Lives を開きます</h1>
        <p className="mb-4 leading-relaxed text-zinc-400">
          {isXInApp
            ? "X内ブラウザ向け案内を表示しています。"
            : "開かない場合は下のボタンを押してください。"}
        </p>

        <a
          href={appUrl}
          className="mt-2 block w-full rounded-xl bg-emerald-500 px-4 py-3.5 text-center font-bold text-emerald-950"
        >
          アプリで開く
        </a>

        <a
          href={APP_STORE_URL}
          className="mt-2.5 block w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3.5 text-center font-bold text-white"
        >
          App Store を開く
        </a>

        {isXInApp && (
          <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm text-zinc-300">
            X内ブラウザでは自動で開けない場合があります。
            <br />
            右上の <b>…</b> → <b>Safariで開く</b>、または上の <b>「アプリで開く」</b>
            を押してください。
          </div>
        )}
      </div>
    </main>
  );
}
