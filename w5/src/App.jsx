import { useState, useMemo } from 'react'
import './styles.css'
import SimpleChart from './components/SimpleChart'
import { plaqueData } from './data/open-plaques-london-2023-11-10-filtered'
import YearRangeSelect from './components/YearRangeSelect'

function App() {
  // 1. 设置年份范围的状态，默认为 1870 到 2020
  const [yearRange, setYearRange] = useState({ min: 1870, max: 2020 })

  // 2. 使用 useMemo 处理数据：按年份进行分箱（Binning）统计
  const chartData = useMemo(() => {
    const binCount = yearRange.max - yearRange.min + 1
    const binsArray = new Array(binCount).fill(0)

    plaqueData.forEach(plaque => {
      const year = Number(plaque.erected)
      if (year >= yearRange.min && year <= yearRange.max) {
        // 计算索引并增加该年份的计数
        binsArray[year - yearRange.min] += 1
      }
    })

    // 返回 Chart.js 需要的对象结构
    return {
      labels: Array.from({ length: binCount }, (_, i) => yearRange.min + i),
      datasets: [
        {
          label: 'Number of Plaques Erected',
          data: binsArray,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    }
  }, [yearRange]) // 当年份范围改变时重新计算

  return (
    <div className="w-full min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          London Plaque Data Visualization
        </h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* 渲染图表组件并传入处理好的数据 */}
          <SimpleChart data={chartData} />

          {/* 在图表下方加入交互组件 */}
        <YearRangeSelect 
          yearRange={yearRange} 
          setYearRange={setYearRange}
        />
        </div>
      </div>
    </div>
  )
}

export default App