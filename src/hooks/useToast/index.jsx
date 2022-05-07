import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import Toast from '@components/Toast'

const execOutAnimation = (container) =>
  new Promise((res) => {
    setTimeout(res, 220)
    container?.classList.add('slide-down')
  })

const useToast = () => {
  const container = useRef(null)
  const fireToast = (content, delay) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    const root = ReactDOM.createRoot(node)
    root.render(<Toast content={content} ref={container} />)

    setTimeout(async () => {
      await execOutAnimation(container.current)
      root.unmount()
      node.remove()
    }, delay)
  }
  return { fireToast }
}

export default useToast
