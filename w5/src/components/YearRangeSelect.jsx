export default function YearRangeSelect(props) {
  // 处理输入框变化的逻辑函数
  function handleChange(e) {
    if (e.target.id === 'start-year') {
      const newStartYear = Number(e.target.value);
      // 保持结束年份不变，更新起始年份
      props.setYearRange({ min: newStartYear, max: props.yearRange.max });
    }
    if (e.target.id === 'end-year') {
      const newEndYear = Number(e.target.value);
      // 保持起始年份不变，更新结束年份
      props.setYearRange({ min: props.yearRange.min, max: newEndYear });
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">Start Year:</span>
        <input 
          type="number" 
          id="start-year" 
          value={props.yearRange.min} 
          onChange={handleChange}
          className="w-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">End Year:</span>
        <input 
          type="number" 
          id="end-year" 
          value={props.yearRange.max} 
          onChange={handleChange}
          className="w-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>
    </div>
  );
}