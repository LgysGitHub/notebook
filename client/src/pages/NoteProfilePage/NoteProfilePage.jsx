import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getNoteProfileById } from '../../api/note'

import styles from './styles.module.css'
import moment from 'moment'

export const NoteProfilePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [profile, setProfile] = useState()

  useEffect(() => {
    if(!id){
      navigate('/')
    }
    (async ()=>{
      const result = await getNoteProfileById(id)
      setProfile(result)
    })()
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.title}>{profile?.title}</div>
      <div className={styles.time}>{moment(profile?.edit_time).format('YYYY-MM-DD hh:mm')}</div>
      <div className={styles.text}>{profile?.text}</div>
    </div>
  )
}