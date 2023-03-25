

const Pagelink = ({link,itemClass}) => {
  return (
    <li key={link.id}>
    <a href={link.href} className={itemClass} rel="noreferrer"> {link.text} </a>
  </li>
  )
}

export default Pagelink