
// eslint-disable-next-line react/prop-types
function Price({ price}) {
  return (
    <div className="price-container">
      <p>Rp. <span>{price}</span></p>
    </div>
  )
}

export default Price