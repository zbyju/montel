import { ResponsiveLine } from "@nivo/line"
import { calculateChildrenByYear, type Record } from "../../../logic/babyboxStats"

interface Props {
  records: Record[]
}

export default function ChildrenByYear({ records }: Props) {
  const rawData = calculateChildrenByYear(records)
  const data = [{
    id: "Kluci",
    data: rawData[0]
  }, {
    id: "Holky",
    data: rawData[1]
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
