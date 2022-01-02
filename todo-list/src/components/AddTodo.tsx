import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const AddTodo = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              title
            </th>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <th>
              description
            </th>
            <td>
              <textarea />
            </td>
          </tr>
          <tr>
            <th>schedule</th>
            <td>
              <SimpleDatePicker/>
              〜
              <SimpleDatePicker/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const SimpleDatePicker = () => {
  const initialDate = new Date()
  const [startDate, setStartDate] = useState<Date>(initialDate)

  const changeDate = (date: Date) => {
    setStartDate(date)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={changeDate}/>
  )
}

export default AddTodo