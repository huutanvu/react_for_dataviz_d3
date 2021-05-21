import BarChart from "./BarChart";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <svg width="960" height="500">
        <BarChart width={500} height={300} />
      </svg>
    </div>
  );
}
