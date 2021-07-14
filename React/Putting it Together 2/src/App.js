import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Wadee" lastName="Awwad" age={28} hairColor="brown" ></PersonCard>
      <PersonCard firstName="Khalil" lastName="Abuayyash" age={26} hairColor="brown" ></PersonCard>
      <PersonCard firstName="Wadee" lastName="Awwad" age={28} hairColor="brown" ></PersonCard>
      <PersonCard firstName="Wadee" lastName="Awwad" age={28} hairColor="brown" ></PersonCard>
    </div>
  );
  
}

export default App;

