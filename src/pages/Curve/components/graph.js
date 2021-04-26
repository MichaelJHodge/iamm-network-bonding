
import React  from "react";
import { Line} from 'react-chartjs-2'



const AreaChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['0', '10000', '20000', '30000', '40000', '50000' , '60000' , '70000' , '80000'],
          datasets: [
            {
              data: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
              borderColor: "#8B40F4",
		  fill: true,
		  lineTension: 0.7,
		  radius: 4,
		  borderWidth: 3,
		  backgroundColor: "#a05cff",
		  display: false,
		  responsive: true,
            },
          
          ],
          
        }}
        height={500}
        width={1000}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}

export default AreaChart