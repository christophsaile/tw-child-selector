function App() {
  return (
    <div>
      <div className="bg-red-500 *:custom-class">
        <div>custom class not working with child selector</div>
      </div>
      <div className="custom-class">
        custom class working without child selector
      </div>
    </div>
  );
}

export default App;
