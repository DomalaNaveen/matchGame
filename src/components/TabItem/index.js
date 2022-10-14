import './index.css'

const TabItem = props => {
  const {imgDetails} = props

  const {imageUrl, thumbnailUrl} = imgDetails

  return (
    <li>
      <button className="" type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default TabItem
