import React from 'react'
import Light from '../../assets/website/Light-day.png'
import Dark from '../../assets/website/Light-night.png'

const DarkMode = () => {
        const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const element = document.documentElement;
     
    React.useEffect(() => {
        if(theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme]);



  return (
    <div className='relative'> 
        <img src={Light} alt='Light' 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-10 cursor-pointer drop-shadow-[1px_1px_1px_rbga(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>

        <img src={Dark} alt='Dark' 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-10 cursor-pointer drop-shadow-[1px_1px_1px_rbga(0,0,0,0.1)] transition-all duration-300'/>
    </div>
  )
}

export default DarkMode