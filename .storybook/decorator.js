import React from 'react'
const StorybookDecorator = story => (
  <section>
    <header />
    <div className="story">{story()}</div>
    <footer />
  </section>
)

export default StorybookDecorator
