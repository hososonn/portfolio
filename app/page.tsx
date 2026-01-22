"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const BackgroundParticles = dynamic(() => import('./components/BackgroundParticles'), { ssr: false });

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "カンタンソリティア",
      image: "/splash_icon.png",
      description: "お子さん、おじいちゃんおばあちゃんでもカンタンにできるソリティア",
      technologies: ["Flutter", "Dart"],
      appStoreUrl: "https://apps.apple.com/jp/app/%E3%82%AB%E3%83%B3%E3%82%BF%E3%83%B3%E3%82%BD%E3%83%AA%E3%83%86%E3%82%A3%E3%82%A2/id6752829674",
      githubUrl: "https://github.com/hososonn/-solitaire",
    },
    {
      id: 2,
      name: "Sound:Dive",
      image: "/icon.png",
      description: "毎日聴いている曲を友達と共有！音楽版BeReal",
      technologies: ["React Native", "Expo"],
      appStoreUrl: "https://apps.apple.com/jp/app/sound-dive-%E9%9F%B3%E6%A5%BD%E3%82%92%E5%BA%83%E3%82%81%E3%82%88%E3%81%86/id6755926411",
      githubUrl: "https://github.com/hososonn/Sound-Dive",
    },
    {
      id: 3,
      name: "Notes'n'Lives",
      image: "/Notes-n-Lives.png",
      description: "ライブで回収した曲を図鑑にして貯めよう！ライブコレクションアプリ！",
      technologies: ["React Native", "Expo"],
      appStoreUrl: "https://apps.apple.com/jp/app/notesnlives-%E3%83%90%E3%83%B3%E3%83%89%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/id6756487053",
      githubUrl: "https://github.com/hososonn/Notes-n-Lives",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-zinc-300/10 to-zinc-400/10 blur-3xl dark:from-zinc-800/5 dark:to-zinc-700/5" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-slate-300/10 to-slate-400/10 blur-3xl dark:from-slate-800/5 dark:to-slate-700/5" 
        />
        <motion.div
           animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-gray-300/8 to-gray-400/8 blur-3xl dark:from-gray-800/3 dark:to-gray-700/3"
        />
        
        {/* Floating Particles */}
        <BackgroundParticles />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80"
      >
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-black dark:text-white hover:opacity-70 transition-opacity">
              Portfolio
            </a>
            <div className="hidden gap-8 md:flex">
              {["自己紹介", "スキル", "プロジェクト", "お問い合わせ"].map((item, i) => {
                const href = ["#about", "#skills", "#projects", "#contact"][i];
                return (
                  <a 
                    key={item} 
                    href={href} 
                    className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-48">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.h1 
            variants={fadeIn}
            className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white md:text-7xl tracking-tight"
          >
            細木大暉の<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-100">
              ポートフォリオ
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl"
          >
            ロックバンドが好きな京都大学の学生です。<br />
            独学でモバイルアプリ開発を行っています。
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group flex h-12 items-center justify-center rounded-full bg-black px-8 text-white transition-all hover:bg-zinc-800 hover:scale-105 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              お問い合わせ
            </a>
            <a
              href="#projects"
              className="group flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-black transition-all hover:bg-zinc-50 hover:scale-105 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              プロジェクトを見る
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-black dark:text-white md:text-4xl">
            自己紹介
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                大学では地球工学を専攻しています。2025年2月から独学でプログラミングを始め、３つのiOSアプリをリリースしました。
              </p>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                新しい技術を学ぶことが好きで、日々開発スキルを磨いています。
                ぜひアプリをインストールして使ってみてください！
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <h3 className="mb-6 text-xl font-semibold text-black dark:text-white flex items-center gap-2">
                <span className="block w-1 h-6 bg-black dark:bg-white rounded-full"></span>
                学歴・経歴
              </h3>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                {[
                  "2019.4 京都私立洛南高等学校入学",
                  "2022.3 京都私立洛南高等学校卒業",
                  "2022.4 京都大学地球工学科入学",
                  "2025.2 独学でプログラミングを始める",
                  "2025.10 「カンタンソリティア」リリース",
                  "2025.12 「Sound:Dive」リリース",
                  "2026.1 「Notes'n'Lives」リリース"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0"></span>
                    <span>{item.replace("• ", "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-black dark:text-white md:text-4xl text-center">
            スキル
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "フロントエンド", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { category: "バックエンド", skills: ["Node.js", "Python", "API設計"] },
              { category: "その他", skills: ["Git", "Docker", "AWS"] },
            ].map((group, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-black dark:text-white md:text-4xl">
            プロジェクト
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative h-56 bg-zinc-50 dark:bg-zinc-800/50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.appStoreUrl}
                      className="flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-blue-400"
                    >
                      App Store
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-blue-400"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-zinc-900 px-6 py-16 text-center text-white dark:bg-zinc-100 dark:text-black md:px-12"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 dark:text-zinc-600">
            お仕事のご依頼やご質問がございましたら、お気軽にお問い合わせください。
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
            <a
              href="mailto:hososonn@gmail.com"
              className="group flex items-center justify-center gap-4 rounded-xl bg-white/10 p-6 transition-all hover:bg-white/20 dark:bg-black/5 dark:hover:bg-black/10 md:col-span-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 dark:bg-black/10">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">hososonn@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/hososonn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 rounded-xl bg-white/10 p-6 transition-all hover:bg-white/20 dark:bg-black/5 dark:hover:bg-black/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 dark:bg-black/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">@hososonn</span>
            </a>
            
            <a
              href="https://twitter.com/Hiro128013"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 rounded-xl bg-white/10 p-6 transition-all hover:bg-white/20 dark:bg-black/5 dark:hover:bg-black/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 dark:bg-black/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="font-medium">@Hiro128013</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Hiroki Hosogi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}