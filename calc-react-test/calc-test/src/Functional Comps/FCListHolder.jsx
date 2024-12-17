export default function FCListHolder() {
  return (
    <div
      style={{
        maxWidth: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
        border: "dotted purple",
        backgroundColor: "black",
      }}>
      <h1>Add or Remove chips</h1>
      ID: <input type="number" id="id2" /> <br />
      Chips: <input type="number" id="chips2" /> <br />
      <button
        type="submit"
        style={{
          display: "block",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        Modify Player
      </button>
    </div>
  );
}




