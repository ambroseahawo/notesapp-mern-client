import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectNoteById } from "./notesApiSlice"

const Note = ({ noteId }) => {
  const note = useSelector(state => selectNoteById(state, noteId))
  const navigate = useNavigate()

  if (note) {
    const created = new Date(note.createdAt).toLocaleString('en-us', { day: 'numeric', month: 'long' })
    const updated = new Date(note.updatedAt).toLocaleString('en-us', { day: 'numeric', month: 'long' })

    const handleEdit = () => navigate(`/dash/notes/${noteId}`)

    return (
      <tr class="table__row">
        <td class="table__cell note__status">
          {note.completed
            ? <span class="note__status--completed">Completed</span>
            : <span class="note__status--open">Open</span>
          }
        </td>
        <td class="table__cell note__created">{created}</td>
        <td class="table__cell note__updated">{updated}</td>
        <td class="table__cell note__title">{note.title}</td>
        <td class="table__cell note__username">{note.username}</td>

        <td class="table__cell">
          <button class="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    )
  } else return null
}

export default Note