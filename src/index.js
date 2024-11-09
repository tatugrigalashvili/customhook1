import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function useFunction(num1, num2) {
    useEffect(() => {
      const sum = num1 + num2;
      window.alert("ჯამი =" + sum); 
    }, [num1, num2]); 
  }

 
  useFunction(20, 30);

}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
