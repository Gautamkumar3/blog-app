import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import { getAllBlog } from "../../API/api";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [allPost, setAllPost] = useState([]);

  let Tech = allPost.filter((el) => el.category === "tech");
  let Lifestyle = allPost.filter((el) => el.category === "lifestyle");
  let Business = allPost.filter((el) => el.category === "business");
  let Entertain = allPost.filter((el) => el.category === "entertainment");
  let World = allPost.filter((el) => el.category === "world");

  useEffect(() => {
    getAllBlog(page, limit).then((res) => {
      setAllPost(res.data.allPost);
    });
  }, []);

  const data = {
    labels: ["Tech", "Lifestyle", "Business", "Entertainment", "World"],
    datasets: [
      {
        data: [
          Tech.length,
          Lifestyle.length,
          Business.length,
          Entertain.length,
          World.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    tooltips: {
      showData: {
        label: (item, data) => {
          let label = data.labels[item.index];
          return label;
        },
      },
    },

    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 12,
          borderColor: "#fff",
        },
      },
    },
  };

  return (
    <Box  my={7} ml="10%">
      <Box w={"300px"}>
        <Pie data={data} options={options} />
      </Box>
      <Text ml="2%" mt={-10} fontSize={"20px"} fontWeight="bold">
        Total Blog : {allPost.length}
      </Text>
    </Box>
  );
};

export default PieChart;
