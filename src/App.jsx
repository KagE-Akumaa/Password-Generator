import { useCallback, useEffect, useRef, useState } from "react";
import { Display } from "./Components/Display";
import { Input } from "./Components/Input";
import { Change } from "./Components/Change";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const passRef = useRef(null);

  //Function to generate password
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    }

    for (let i = 0; i < Number(length); i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //Function to copy
  const handleCopyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  };
  return (
    <>
      <Display>
        <Input
          password={password}
          handleCopyToClipboard={handleCopyToClipboard}
          passRef={passRef}
        ></Input>
        <Change
          length={length}
          setLength={setLength}
          numberAllowed={numberAllowed}
          setNumberAllowed={setNumberAllowed}
          charAllowed={charAllowed}
          setCharAllowed={setCharAllowed}
        ></Change>
      </Display>
    </>
  );
}

export default App;
