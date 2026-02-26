import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// 必须注册这些组件，图表才能正常显示
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SimpleChart(props) {
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'London Plaques Analysis' },
        },
    };

    // 接收来自 App.jsx 的 data 数据
    return <Bar data={props.data} options={options} />;
}