import { Endpoints } from "../endpointer"
import { postFetch } from "../fetchHelper"

export async function getNoteList() {
  const reqPayload = {
    
  }

  return await postFetch(
    `${Endpoints.GET_NOTE_LIST}`,
    reqPayload
  )
}

export async function getNoteProfileById(id) {
  const reqPayload = {
    id
  }

  return await postFetch(
    `${Endpoints.NOTE_PROFILE}/${id}`,
    reqPayload
  )
}