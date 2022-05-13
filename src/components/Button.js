const Button = (props) => {
  return ( 
    <>
      <button><a href={props.link} target="_blank" rel="noreferrer">{props.name}</a></button>
      </>
  )
}

export default Button