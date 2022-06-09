import React from 'react'

export default function Col({sm,md,lg,children}) {
  return (
    <div className={`col sm-${sm} md-${md} lg-${lg}`}>
      {children}
    </div>
  )
}
