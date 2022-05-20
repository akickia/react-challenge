const ExtButton = ({link, name}) => {
  return (
    <>
    <button className="ext-btn" 
    style={{
      opacity: "0.7", 
      }}>
      <a href={link} target="_blank" rel="noreferrer">{name}</a>
    </button>
  </>
  )
}

export default ExtButton