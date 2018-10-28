import { condensed as theme } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import { groovy } from 'react-syntax-highlighter/languages/prism'

export default {
  ...theme,

  colors: {
    ...theme.colors, // include existing theme colors
    text: 'black',
    background: 'white'
  },
  prism: {
    style: okaidia,
    languages: {
      groovy: groovy
    }
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
