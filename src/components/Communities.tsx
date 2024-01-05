import React from 'react'

const Communities = ({tabCategory, open}:any) => {
  return (
    <div>
      <div className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
                open === tabCategory ? "grid grid-cols-3 w-full gap-10 mt-10" : "hidden"
            } `}>
                <h1>Communities</h1>
                    
            </div>
    </div>
  )
}

export default Communities;