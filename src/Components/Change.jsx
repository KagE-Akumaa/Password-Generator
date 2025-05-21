export const Change = ({
  length,
  setLength,
  numberAllowed,
  setNumberAllowed,
  charAllowed,
  setCharAllowed,
}) => {
  return (
    <div className="flex text-sm gap-x-4">
      {/* Length Range */}
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          id="length"
          min={6}
          max={30}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label htmlFor="length">Length: {length}</label>
      </div>

      {/* Number Checkbox */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id="number"
          checked={numberAllowed}
          className="cursor-pointer"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="number">Number</label>
      </div>

      {/* Special Characters Checkbox */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id="character"
          checked={charAllowed}
          className="cursor-pointer"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="character">Character</label>
      </div>
    </div>
  );
};
