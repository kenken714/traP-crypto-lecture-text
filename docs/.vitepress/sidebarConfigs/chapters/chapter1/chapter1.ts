import type { DefaultTheme } from 'vitepress'

export const chapter1SidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: '第1章: 概要と環境構築',
      items: [
        { text: 'はじめに', link: '/chapter1/' },
        { text: '暗号に入門しよう', link: '/chapter1/crypto-overview' },
        { text: '環境構築 (Windows, Linux)', link: '/chapter1/setup-windows-linux' },
        { text: '環境構築 (Mac)', link: '/chapter1/setup-mac' },
        { text: '[演習] 暗号の入門問題', link: '/chapter1/exercise1' }
      ]
    }
]

