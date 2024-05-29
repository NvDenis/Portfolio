
import './TechTask.css'
export const TechTask = () => {
  return (
    <div className='techs'>
      <p>Tech Task</p>

      <div className="logos">
        <ul>
          <li className='logo-1'>
            <img src={'https://skillicons.dev/icons?i=html,css'} alt="" />
          </li>
          <li className='logo-2'>
            <img src={'https://skillicons.dev/icons?i=js,ts'} alt="" />
          </li>
          <li className='logo-3'>
            <img src={'https://skillicons.dev/icons?i=react,nextjs'} alt="" />
          </li>
          <li className='logo-4'>
            <img src={'https://skillicons.dev/icons?i=tailwind,sass'} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}
