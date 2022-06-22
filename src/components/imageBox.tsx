function ImageBox(props: {src: string}){
  return (
    <div className="imgBox">
      <img src={props.src} alt="" />
    </div>
  )
}
export default ImageBox; 