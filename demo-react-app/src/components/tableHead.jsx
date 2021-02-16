import React from 'react'

const TableHead = (props) => {
    return (
        <thead>
              <tr>
                {props.tableHeadData.map((item) => (
                  <th key={item ==='' ? Math.random(): item}>{item}</th>
                ))}
              </tr>
            </thead>
    )
}

export default TableHead
