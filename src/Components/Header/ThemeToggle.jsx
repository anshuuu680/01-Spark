import { useGlobalContext } from '../../Context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';


const ThemeToggle = () => {

    const { isDark, toggleDark } = useGlobalContext();

    return (
        <section className='toggle-container grid '>
            <button className='dark-toggle text-xl decoration-0 bg-transparent border-0' onClick={toggleDark}>
                {isDark ? (<BsFillSunFill style={{color:"white"}} className='toggle-icon' />) :
                    (<BsFillMoonFill  style={{color:"#000"}} className='toggle-icon' />)}


            </button>
        </section>
    )
}
export default ThemeToggle;