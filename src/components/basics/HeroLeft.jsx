import burger from '../../assets/burger-king-comp.jpg'

const HeroLeft = () => {
  return (
    <div style={{flex:1}}>
        <div className="img" style={{textAlign:'center'}}>
        <img src={burger} alt="burger"/>

        </div>
    </div>
  )
}

export default HeroLeft