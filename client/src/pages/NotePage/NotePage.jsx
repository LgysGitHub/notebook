import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { getNoteList } from '../../api/note'

import styles from './styles.module.css'
import moment from "moment"

export function NotePage(){
  const navigate = useNavigate()
  const [list, setList] = useState([])

  const toRefresh = () => {
    setList(pre => {
      return [...pre].sort((a, b)=> moment(a.edit_time).valueOf() - moment(b.edit_time).valueOf())
    })
  }

  useEffect(()=>{
    (async ()=>{
      const result = await getNoteList()
      setList(result)
    })()
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.title}>My Notebook</div>
      <div className={styles.header}>
        <div className={styles.refreshCard}>
          <div 
            className={styles.refreshBtn}
            onClick={() => {
              toRefresh()
            }}
          >
            refresh
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {
          list.map((item,index) => {
            return (
              <div 
                key={index} 
                className={styles.item} 
                onClick={()=>{
                  navigate(`/note/${item.id}`)
                }}
              >
                <div className={styles.time}>{moment(item.edit_time).format('YYYY-MM-DD hh:mm')}</div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}