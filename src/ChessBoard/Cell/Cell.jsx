import "./style.css";

// eslint-disable-next-line react/prop-types
function Cell({ cellStyle}) {
  // const CellStyled=styled.div`
  const styleObj = {
    backgroundColor: cellStyle,
    width: '50px',
    height: '50px',
    display: 'inline-block',
    border: '1px solid black'
  }
  // eslint-disable-next-line react/prop-types
  return <div style={styleObj}>
    
  </div>
  
}
export default Cell;