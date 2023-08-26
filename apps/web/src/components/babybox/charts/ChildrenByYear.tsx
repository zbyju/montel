import { ResponsiveLine } from "@nivo/line"

export default function ChildrenByYear() {
  const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
  const data = [{
    id: "Kluci",
    data: years.map(i => ({
      x: i,
      y: Math.floor(Math.random() * 15)
    }))
  }, {
    id: "Holky",
    data: years.map(i => ({
      x: i,
      y: Math.floor(Math.random() * 15)
    }))
  }]

  return (
    <div className="lg:w-3/5 w-full aspect-video pa-5 m-auto">
      <ResponsiveLine
        margin={{ top: 10, right: 20, bottom: 45, left: 40 }}
        colors={["#2e3c81", "#831843"]}
        data={data}
        enableGridX
        enableGridY
        curve="catmullRom"
        lineWidth={4}
        pointSize={14}
        pointColor="#fce7f5"
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: 'Rok',
          legendPosition: 'middle',
          legendOffset: 35,
          tickRotation: 0
        }}
        axisLeft={{
          legend: 'Celkem',
          legendPosition: "middle",
          legendOffset: -30
        }}
      />
    </div>
  )
}
