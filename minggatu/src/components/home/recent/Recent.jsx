import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Бүх төрлийн мэдлэгийг танд хүргэж байна.' subtitle='Минггату нь одон оронч математикч Мянгат гуайг хүндэтгэж нэрлэв.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
