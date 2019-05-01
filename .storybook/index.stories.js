import loadStory from './loadStory'

loadStory(require.context(('../stories/'), true, /\.vue$/))
