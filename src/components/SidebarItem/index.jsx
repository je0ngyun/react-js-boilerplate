import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StSidebarItem } from './style'

const SidebarItem = ({ title, children, curPart, childPart, clickCb }) => {
  const [isOpenLink, setIsOpenLink] = useState(false)

  useEffect(() => {
    if (curPart === title || childPart?.includes(curPart)) {
      setIsOpenLink(true)
    } else {
      setIsOpenLink(false)
    }
  }, [curPart])

  const handleClick = () => {
    setIsOpenLink((prev) => !prev)
    if (childPart) {
      clickCb(childPart[0])
      return
    }
    clickCb(title)
  }
  return (
    <StSidebarItem>
      <button onClick={handleClick}>{title}</button>
      <div>{isOpenLink && children}</div>
    </StSidebarItem>
  )
}

SidebarItem.propTypes = {
  childPart: PropTypes.arrayOf(PropTypes.string),
  clickCb: PropTypes.func,
  curPart: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}
export default SidebarItem
