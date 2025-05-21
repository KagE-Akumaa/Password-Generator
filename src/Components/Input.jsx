export const Input = ({ password, handleCopyToClipboard, passRef }) => {
  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        placeholder="Password"
        readOnly
        value={password}
        ref={passRef}
        className="text-white  p-2 focus:outline-none border-2 border-orange-400 w-full"
      />
      <button
        type="button"
        className="bg-cyan-500 outline-none text-white px-3 py-0.5 shrink-0 hover:bg-cyan-400 cursor-pointer"
        onClick={handleCopyToClipboard}
      >
        Copy
      </button>
    </div>
  );
};
