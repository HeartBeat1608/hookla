import React, { useState } from "react";

const useLoader = () => {
  const [loading, toggleLoading] = useState<boolean>(false);

  const setLoading = {
    show: () => toggleLoading(true),
    hide: () => toggleLoading(false),
  };

  const LoadingComponent: React.FC<{ text?: string; percent?: number }> = ({
    text,
    percent,
  }) => {
    if (!loading) return null;
    return (
      <div>
        <h2>{text || "Loading"}</h2>
        <p>{percent}</p>
      </div>
    );
  };

  return { LoadingComponent, loading, setLoading };
};

export default useLoader;
