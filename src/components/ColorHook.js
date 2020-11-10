import React, { useEffect, useState }from 'react'

export default function ColorHook() {

  const [color, setColor] = useState("black")
  
  // syntax is useEffect(() => {}, [])
  // dependancy array at end is and state,prop,context used in the useEffect callback
  // useEffect will trigger based on changes in dependancies
  // [] an empty array will trigger hook once on mounting (lke componentDidMount)
  // [something] hook will rerun anytime dependancy changes (like componentDidUpdate)
  // leaving out array will mean hook runs anytime component is updated AND after initial render
  useEffect(() => {    
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("green")
      } else {
        setColor("black")
      }
    }
    document.addEventListener("click", changeColorOnClick)
    // behaves like componentWillUnmount
    return () => {
      document.removeEventListener("click", changeColorOnClick)
    }
  }, [color]);

  
  return (
    <div>
      <div
        id="myDiv"
        style ={{
          color: "white",
          width: "200px",
          height:"100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        thisDivCanChangeColor when you click page
      </div>
    </div>
  )
}
