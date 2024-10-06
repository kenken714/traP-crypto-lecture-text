import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crypto講習会",
  description: "Crypto&現代暗号講習会のテキスト",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: '検索ボックスを開く'
          },
          modal: {
            displayDetails: '詳細を表示',
            resetButtonTitle: 'リセット',
            backButtonTitle: '戻る',
            noResultsText: '見つかりませんでした',
            footer: {
              selectText: '選択',
              selectKeyAriaLabel: '結果を選択するには、上下キーを使用します',
              navigateText: '移動',
              navigateUpKeyAriaLabel: '前の結果に移動するには、上キーを使用します',
              navigateDownKeyAriaLabel: '次の結果に移動するには、下キーを使用します',
              closeText: '閉じる'
            }
          }
        }
      }
    }
  }
})
