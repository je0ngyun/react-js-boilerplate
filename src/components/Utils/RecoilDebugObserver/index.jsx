import React, { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

const RecoilDebugObserver = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}

export default RecoilDebugObserver
