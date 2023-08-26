import { ResponsiveBar } from "@nivo/bar"

export default function ChildrenByDay() {
  const days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"]

  const data = days.map(i => ({
    x: i,
    Holky: Math.floor(Math.random() * 15),
    Kluci: Math.floor(Math.random() * 15)
  }))
  console.log(data)
  return (
    <div className="lg:w-3/5 w-full aspect-video pa-5 m-auto">
      <ResponsiveBar
        margin={{ top: 10, right: 0, bottom: 45, left: 40 }}
        colors={["#2e3c81", "#831843"]}
        colorBy="id"
        data={data}
        indexBy="x"
        keys={["Kluci", "Holky"]}
        minValue={0}
        enableGridX
        enableGridY
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: 'Den v týdnu',
          legendPosition: 'middle',
          legendOffset: 35,
          tickRotation: 0
        }}
        axisLeft={{
          legend: 'Celkem',
          legendPosition: "middle",
          legendOffset: -30
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
      />
    </div>
  )
}