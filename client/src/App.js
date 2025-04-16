import { Layout } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'

import { NotePage } from './pages/NotePage'
import { NoteProfilePage } from './pages/NoteProfilePage'

import './App.css'

const { Header, Content } = Layout

function App() {
  const headerStyle = {
    color: '#000',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#1677ff'
  }
  
  const contentStyle = {
    lineHeight: '120px',
    color: '#fff',
    height: 'calc( 100vh - 64px )',
    backgroundColor: '#f6f6f6',
  }

  const layoutStyle = {
    overflow: 'hidden',
    Height: '100vh'
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle} className='Header'>
        <Link className='Link' to='/'>Note</Link>
      </Header>
      <Content style={contentStyle}>
          <Routes>
            <Route path='/' element={<NotePage />} />
            <Route path='/note/:id' element={<NoteProfilePage />} />
          </Routes>
        </Content>
    </Layout>
  )
}

export default App
