import React from 'react'

const Button = () => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.dir(e)
  }

  return (
    <>
      <div>this is TodoList&#39;s button</div>
      <button onClick={handleOnClick}>ts todo button</button>
    </>
  );
};

export default Button;