import React from 'react'

function OrderedList() {
  return (
    <div className='OrderedList'>
        <h1 className='OLtitle'>Reason why you're exicited to learn react: </h1>
        <ol className='orderedListItem'>
            <li>It's fun to learn</li>
            <li>Mostly used by other programmers</li>
            <li>It's make it easy and readable</li>
        </ol>
    </div>
  )
}

export default OrderedList