const Button = ({link, name}) => {
  return ( 
    <>
      <button className="btn" style={{
      opacity: "0.7", 
      }}>
        <a href={link}>{name}</a></button>
    </>
  )
}

export default Button