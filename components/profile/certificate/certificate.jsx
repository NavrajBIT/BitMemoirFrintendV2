import tableData from "./tabelData";
import Button from "@/components/subcomponents/button/button";
import './certificate.css';

const tableStyle = {
  // border:'2px solid red',
  background: '#0F303E',
  maxWidth: '65rem',
  width: '90%',
  // display: 'flex',
  // flexWrap: 'wrap',
  // alignItems: 'center',
  borderRadius: '8px',
  position: 'relative',
  margin: 'auto',
  width: '100%',
  borderCollapse: 'collapse'
}

const Certificate = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1rem 0 2rem' }}>Certificate Name</h1>
      <div id="tableContainer">
        <table style={tableStyle}>
          <tr>
            <th>S No.</th>
            <th>Recipient address</th>
            <th>Token Id</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
            tableData.map((data, index) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.recipientAddress}</td>
                  <td>{data.tokenId}</td>
                  <td>{data.status}</td>
                  <td>
                    <button>Retry</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Certificate