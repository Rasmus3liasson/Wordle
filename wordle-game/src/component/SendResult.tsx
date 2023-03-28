import React from "react";

export default function SendResult() {
  return (
    <div className="text-center mt-6">
      <h3>Grattis</h3>
      <div className="flex flex-col justify-center">
        <form action="">
          <label aria-label="Fyll i ditt namn">Fyll i ditt namn</label>
          <input type="text" />
          <button>Lämna in</button>
        </form>
      </div>
    </div>
  );
}
