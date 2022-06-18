import { useState, useEffect } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import ErrorBoundary from "ui/ErrorBoundary";
import { reactLiveHome } from "styles/theme";

export default function Editor() {
  return (
    <div>
      <h1 className="bold">Editor</h1>
      <ErrorBoundary>
        <LiveProvider code={INITIAL_CODE} theme={reactLiveHome as any} scope={{ useState, useEffect }}>
          <div className="bg-[#322a38] rounded-md p-2">
            <LiveEditor />
          </div>
          <LiveError className="text-red-400" />
          <LivePreview />
        </LiveProvider>
      </ErrorBoundary>
    </div>
  );
}

const INITIAL_CODE = `
function Editor() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>
        <button className="p-2" onClick={() => setCounter(c => c - 1)}>-</button>
        {counter}
        <button className="p-2" onClick={() => setCounter(c => c + 1)}>+</button>
      </p>
    </div>
  )
}
`.trim();
