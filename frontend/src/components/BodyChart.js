import { useState } from "react";
import LineChart from "./LineChart";
import { UserData } from "./UserData";

function App() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
            "#ffffff",
            ],
            borderColor: "#165ccc",
            borderWidth: 2,
        },],
  });

  return (
    <LineChart chartData={userData} />
  );
}

export default App;