import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full", timeStyle: "long"
  }).format(date)

  const content = (
    <section class="welcome">
      <p>{today}</p>
      <h1>Welcome!</h1>
      <p>
        <Link to="/dahs/notes">View TechNotes</Link>
      </p>
      <p>
        <Link to="/dahs/users">View User Settings</Link>
      </p>
    </section>
  )

  return content
}

export default Welcome