import React from 'react'

function DefaultLayout(props) {
  return (
    <div>
      <header>
        Header
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default DefaultLayout;