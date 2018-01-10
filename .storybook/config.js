import { configure } from '@storybook/react'
import '../src/app/App.global.scss'
import './storybook.global.scss'

const req = require.context('../src/', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
