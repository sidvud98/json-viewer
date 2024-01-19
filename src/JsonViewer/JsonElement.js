import { JsonPair } from "./JsonPair";

export function JsonElement({ json }) {

  function getJsonView(json) {
    const isJsonArray = Array.isArray(json);
    let jsonContent = Object.keys(json).map((key) => {
      return (
        <div style={{ display: 'flex' }}>
          {isJsonArray && <span>{`---`}</span>}
          <JsonPair jsonKey={key} key={key} jsonValue={json[key]} />
        </div>
      );
    });

    return (
      <>
        <div className="jsonBody"> {jsonContent} </div>
      </>
    );
  }

  return (
    <>
      <div>{typeof json === "object" ? getJsonView(json) : json}</div>
    </>
  );
}