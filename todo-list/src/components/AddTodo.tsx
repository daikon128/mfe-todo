import React from 'react'

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
              <input/>
              〜
              <input/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default AddTodo