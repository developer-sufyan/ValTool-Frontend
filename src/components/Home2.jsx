import Card from 'react-bootstrap/Card';


export default function Home2() {


  return (
    <div  className=" bg-primary text-white min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fw-bold pt-5 text-white">
              Where smart decisions begin with precise valuations
            </h1>
            <p className="text-center text-light">Data you can trust. Results you can see</p>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-12 d-md-flex justify-content-center align-items-stretch gap-3">

            <Card style={{ height: '15rem', backgroundColor: '#f5f7fa' }} className="col-md-4 text-center rounded-5 text-primary border-0 mb-3 mb-md-0">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Industry Rate</Card.Title>
                <Card.Text className=''>
                  The average performance benchmark (like profit margin or revenue multiple) used across your business sector to compare value, helping assess how your business stacks up against industry standards.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ height: '15rem', backgroundColor: '#f5f7fa' }} className="col-md-4 text-center rounded-5 text-primary border-0 mb-3 mb-md-0">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Market Rate</Card.Title>
                <Card.Text>
                  The current value buyers are paying for similar businesses, influenced by demand, trends, and economic conditions.It serves as a real-time indicator of what the market is willing to pay under prevailing circumstances.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ height: '15rem', backgroundColor: '#f5f7fa' }} className="col-md-4 text-center rounded-5 text-primary border-0">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Valuation</Card.Title>
                <Card.Text>
                  Estimate your business value by multiplying your annual revenue or profit by the typical industry multiple (usually 3× to 5×). This gives you a fast, reliable snapshot of what your business might be worth.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
