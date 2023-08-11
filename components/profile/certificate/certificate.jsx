import tableData from "./tabelData";
import styles from './certificate.module.css';

const tableStyle = {
  // border:'2px solid red',
  background: '#0F303E',
  maxWidth: '65rem',
  width: '90%',
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
      <div id={styles.tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th className={styles.th}>S No.</th>
              <th className={styles.th}>Recipient address</th>
              <th className={styles.th}>Token Id</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((data, index) => {
                return (
                  <tr className={styles.row}>
                    <td className={styles.column}>{data.id}</td>
                    <td className={styles.column}>{data.recipientAddress}</td>
                    <td className={styles.column}>{data.tokenId}</td>
                    <td className={styles.column}>{data.status}</td>
                    <td className={styles.column}>
                      <button className={styles.tableBtn}>Retry</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Certificate