
const Sociallink = ({href,iconClass,itemClass}) => {
  return (
    <li>
    <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={iconClass}></i></a>
    </li>
  )
}

export default Sociallink