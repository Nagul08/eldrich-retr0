import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({})
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  const cursorRef = useRef(null);


  const handleClick = () => {
  const sound = new Audio('/noice.mp3')
  sound.play()
  setStyle({
    rotation: Math.random() * 70 ,
    x: Math.random() * 60,
    y: Math.random() * 60,
  })
  setTimeout(() => {
    setShow(true)
  }, 2500)
  setTimeout(() => {
    setShow(false)
  }, 3500) 
  setTimeout(() => {
     window.location.href = 'https://github.com/Nagul08'
  }, 3550)
}
 
useEffect(() => {
  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY })
    if (cursorRef.current) cursorRef.current.style.opacity = 1
  }
  const handleMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = 0
  }
  const handleMouseEnter = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = 1
  }
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseenter', handleMouseEnter)
  return () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
  }
}, [])



  

  return (


<>
  <div onMouseDown={() => setClicked(true)} onMouseUp={() => setClicked(false)}>
    <div
      ref={cursorRef}
      className={`cursor ${hover ? 'expanded' : ''} ${clicked ? 'clicked' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />

    <div className='base'>
      <button
        className="bigB"
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="/retr0.svg"
          alt="N"
          className={`h ${clicked ? '' : `${hover ? 'big' : ''}`}`}
        />
        {show && (
          <h1 style={{
            position: 'absolute',
            top: `${style.y}%`,
            left: `${style.x}%`,
            transform: `rotate(${style.rotation}deg)`,
          }}>
            *Noice*
          </h1>
        )}
      </button>
      <img src="./retr0-f.png" alt="Spidey" className='Spidey' />
    </div>
  </div>
</>
  )
}

export default App
