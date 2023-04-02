import Table from 'react-bootstrap/Table';
import data from "../db.json"

function MyTable() {
  return (
    <Table responsive>
      <thead className='head' >
        <tr>
          <th>PROJECT NAME</th>
          <th>STATUS</th>
          <th>ABC</th>
          <th>XYZ</th>
          <th>ABC</th>
          <th>PQR</th>
        </tr>
      </thead>
      <tbody>
      {
          data.map((el)=>(
          <tr key={el.id} >
          <td>{el.name}</td>
          <td style={{backgroundColor:el.status==="On hold"?"blue":el.status==="Risk"?"red":el.status==="Potential risk"?"yellow":"green", border:"none" }} >{el.status}</td>
          <td>{el.email}</td>
          <td>xyz</td>
          <td>abc</td>
          <td>pqr</td>
          </tr>
          ))
      }
      </tbody>
    </Table>
  );
}

export default MyTable;