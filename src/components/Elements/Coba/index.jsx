import { useMemo, useState } from "react";

const CobaEl = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

const Button = () => {
  const [state, setState] = useState();

  const memo = useMemo(() => {}, []);
  return <button>Klik me</button>;
};

export default CobaEl;
