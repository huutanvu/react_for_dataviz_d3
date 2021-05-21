import {data} from './data';
import Scatterplot from './Scatterplot';
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <svg width="500" height="500">
        <Scatterplot x={100} y={100} height={200} width={300} data={data}/>
      </svg>
    </div>
  );
}
