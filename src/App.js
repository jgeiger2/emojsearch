import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import EmojiResults from "./Components/EmojiResults";
import EmojiRow from "./Components/EmojiRow";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <EmojiResults />
      <EmojiRow />
    </div>
  );
}

export default App;
