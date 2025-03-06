import React from "react";


const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
  };
  
  interface Obj {
    suma: number;
    concatenated: string;
  }
  
  const masiv: (number | string)[] = [45, "hello", 15, "my", 10, -2, "name", "is", -10, "olha", 15, 12];
  
  const NewObjects: React.FC<{ arr: (number | string)[] }> = ({ arr }) => {
    const result: Obj = {
      suma: arr
        .filter((item): item is number => typeof item === "number") // <== Це каже TypeScript, що тут тільки числа
        .reduce((acc, num) => acc + num, 0),
  
      concatenated: arr
        .filter((item): item is string => typeof item === "string") // <== Тут тільки рядки
        .join(" "),
    };
  
    return (
      <div>
        <p>Сума чисел: {result.suma}</p>
        <p>Об'єднаний текст: {result.concatenated}</p>
      </div>
    );
  };
const TypeScriptpPage = () => {
    return (
        <div >
            <Box>Це текст всередині боксу</Box>
            <NewObjects arr={masiv} />
        </div>
    );
};

export default TypeScriptpPage;