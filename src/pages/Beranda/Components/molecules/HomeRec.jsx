import Line from "../atoms/Line"
import Title from "../atoms/Title"
import Button from "../atoms/button"
import Card from "./Card"

function HomeRec() {
  return (
    <div>
      <div className="home-rec">
        <Title title='Segera Hadir' />
        <Line />
        <Card />
      </div>
      <div className="home-rec">
        <Title title='Rekomendasi Terbaik' />
        <Line />
        <Card />
      </div>
      <div className="home-rec">
        <Title title='Konser Musik' />
        <Line />
        <Card />
      </div>
      <div className="home-rec">
        <Title title='Festival' />
        <Line />
        <Card />
      </div>
      <Button label='Lihat Selengkapnya'/>
    </div>
  )
}

export default HomeRec