import './Header.css'

const Header = (props : {title: string}) => {
  return (
  
    <header>
        <h1>{props.title}</h1> 

        {/* Bild av Donald Tong: https://www.pexels.com/sv-se/foto/109669/ */}
        <img src="src/assets/cinema.jpg" alt="bio" />
      
        
    </header>     
  
  )
}

export default Header
