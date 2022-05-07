import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import Deffered from '@utils/deferred'
import Popup from '@components/Popup'

const execOutAnimation = (container) => {
  container?.classList.add('slide-down')
}

const usePopup = () => {
  const container = useRef(null)

  const openPopup = async ({ render, cancelButton = true }) => {
    const deferred = new Deffered()
    const node = document.createElement('div')
    document.body.appendChild(node)
    const root = ReactDOM.createRoot(node)

    const handleConfirm = () => {
      execOutAnimation(container.current)
      setTimeout(() => {
        root.unmount()
        deferred.resolve(true)
        node.remove()
      }, 150)
    }

    const handleCancle = () => {
      execOutAnimation(container.current)
      setTimeout(() => {
        root.unmount()
        deferred.resolve(false)
        node.remove()
      }, 150)
    }

    root.render(
      <Popup
        render={render}
        cancelButton={cancelButton}
        ref={container}
        handleCancle={handleCancle}
        handleConfirm={handleConfirm}
      />
    )
    return await deferred
  }
  return { openPopup }
}

export default usePopup
