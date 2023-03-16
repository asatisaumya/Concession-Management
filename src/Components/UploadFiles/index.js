import { Button, Table, Row, Col } from 'antd';
import { useState} from 'react';
import './index.scss';

const columns = [
  {
    title: 'Select File',
    dataIndex: 'selectfile',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  }
]
const data = [];
for (let i = 1; i < 6; i++) {
  data.push({
    key: i,
    selectfile:  <>
                   <form action="#">
                    <center>
                      <input className='fileUpload' type="file" id="filename" name='PDFfile' accept='application/pdf' />
                    </center>
                   </form>
                </>,
    status: <span className='status'></span>,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Row>
      <Col span={24}>
    <div className='tableView'>
    <h2 className='heading'>Upload Files</h2>
    <form>
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
    <Button className='buttonStyle' type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
      Process
    </Button>
    </form>
  </div>
  </Col>
   </Row>
  );
};
export default App;
