import React from 'react'

export default ({ footer, content }) => (
  <blockquote className="blockquote text-center">
    <p className="mb-0 font-italic">
      "{content}"
    </p>
    <footer className="blockquote-footer">
      {footer}
    </footer>
  </blockquote>
)
