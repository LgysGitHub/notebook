const NoteList = [
  {id: 1, title: 'Untitled', text: 'note1', edit_time: '2025-04-16 03:21'},
  {id: 2, title: 'Untitled', text: 'note2', edit_time: '2025-04-10 03:21'},
  {id: 3, title: 'Untitled', text: 'note3', edit_time: '2025-10-10 03:21'},
  {id: 4, title: 'Untitled', text: 'note4', edit_time: '2025-10-10 03:21'},
  {id: 5, title: 'Untitled', text: 'note5', edit_time: '2025-10-10 03:21'},
  {id: 6, title: 'Untitled', text: 'note6', edit_time: '2025-10-10 03:21'},
  {id: 7, title: 'Untitled', text: 'note7', edit_time: '2025-10-10 03:21'},
  {id: 8, title: 'Untitled', text: 'note8', edit_time: '2025-10-10 03:21'},
  {id: 9, title: 'Untitled', text: 'note9', edit_time: '2023-10-10 03:21'},
  {id: 10, title: 'Untitled', text: 'note10', edit_time: '2025-10-10 03:19'},
]

export const getNoteList = async () => {
  return NoteList
}

export const getNoteProfileBy = async (id) => {
  try{
    const note = NoteList.find(note => note.id == id)
    if (!note) {
      throw '未找到note'
    }

    return note
  } catch(err){
    throw err
  }
}