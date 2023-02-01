import React from "react";
import "./lineGraphic.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card } from "antd";

import {
  LoadingAvatar,
  TittleGraph,
} from "components/GraphicExtras/GraphicExtras";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraphic = ({ title, labels, values, loading, color, tooltip }) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        borderColor: color.borderColor,
        backgroundColor: color.backgroundColor,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <Card>
      <TittleGraph title={title} tooltip={tooltip} />
      <div>
        {loading ? (
          <LoadingAvatar />
        ) : (
          <Line data={data} options={options} className="canvas-container" />
        )}
      </div>
    </Card>
  );
};

export default LineGraphic;
