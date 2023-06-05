import NoteForm from './NoteForm'

function NewNote() {
  const onSubmit = () => {
    
  }
  return (
    <>
        <h1 className='mb-4'>New Note</h1>
        <NoteForm onSubmit={onSubmit} />
    </>
  )
}

export default NewNote
