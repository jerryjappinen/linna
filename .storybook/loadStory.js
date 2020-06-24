import sortBy from 'lodash/sortBy'

import { storiesOf } from '@storybook/vue'

const replaceAll = (string, search, replacement) => {
  return string.replace(new RegExp(search, 'g'), replacement)
}

const baseName = (filename) => {
  const base = ('' + filename).substring(filename.lastIndexOf('/') + 1)

  if (base.lastIndexOf('.') !== -1) {
    return base.substring(0, base.lastIndexOf('.'))
  }

  return base
}

const dirName = (filename) => {
  const base = ('' + filename).substring(2, filename.lastIndexOf('/'))
  return replaceAll(base, '/', ' ')
}

// TODO: get label automatically based on filename
export default (context) => {
  const stories = []

  // Load each module from the context that was passed
  context.keys().forEach((filename) => {
    stories.push({
      filename,
      label: dirName(filename),
      name: baseName(filename),
      component: context(filename).default
    })
  })

  // Sort stories by name and register them
  sortBy(stories, (item) => {
    return [
      item.label !== 'Docs',
      item.label,
      item.name
    ]
  }).forEach(({ label, filename, name, component }) => {

    // Use Storybook's syntax to load and render the Vue component
    storiesOf(label, module)
      .add(name, () => {
        return {
          render (h) {
            return h(component)
          }
        }
      })

  })

}
