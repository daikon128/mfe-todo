import React, { useEffect, useState } from "react";

const Clock = () => {
  const [startTimeLabel, setStartTimeLabel] = useState("")

  useEffect(() => {
    const date = new Date()
    const label = `作業開始時刻は${date.toLocaleTimeString()}`
    setStartTimeLabel(label)
  })

  return (
    <div>
      <div>{startTimeLabel}</div>
    </div>
  )
};

export default Clock;
