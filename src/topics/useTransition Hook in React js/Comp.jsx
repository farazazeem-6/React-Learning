import React, { useTransition } from "react";

function Comp() {
  const [pending, startTransition] = useTransition(false);
  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <div>
      {pending ? (
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDAwN3N6NWc5dTc0NzdnemJyNzV4azZ4cDV2OW5vaHhrYXNjdTJzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt=""
        />
      ) : null}
      <button disabled={pending} onClick={handleButton}>
        Click Me
      </button>
    </div>
  );
}

export default Comp;
