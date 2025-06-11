import React from 'react'

const MainLayout= ({ children}) => {
  return (
    <div style ={{minHeight: '100vh', background:"#f0f0f0"}}>
        <header style={{padding:"1rem", background:"#273c75",color:"#fff"}}>
            <h2>Login System</h2>
        </header>
        <main style = {{maxWidth:400, margin:"2rem auto", padding:"2rem", background:"#fff", borderRadius:"8", boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
            {children}
        </main>
    </div>
  )
}

export default MainLayout
