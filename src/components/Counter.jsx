import React, { Fragment, useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import industry from '../assets/images/industry-svgrepo-com.svg'
import market from '../assets/images/market-analysis-svgrepo-com.svg'
import customer from '../assets/images/customer-service.svg'

export default function Counter() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.5 });

  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);

  useEffect(() => {
    if (inView1) {
      setStart1(false);
      setTimeout(() => setStart1(true), 100);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setStart2(false);
      setTimeout(() => setStart2(true), 100);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setStart3(false);
      setTimeout(() => setStart3(true), 100);
    }
  }, [inView3]);

  return (
    <Fragment>
      <div className="container-fluid FC py-5" style={{ background: "linear-gradient(120deg, #f8fafc 60%, #e3f2fd 100%)" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mt-4 mb-5">
              <h1 className='text-center text-capitalize fw-bold fs-2' style={{ color: "#22C55E", letterSpacing: 1 }}>
                The most comprehensive, timely, reliable data to help you master the evolving financial market.
              </h1>
            </div>
            <div className="col-12 text-center mb-5 d-md-flex justify-content-center align-items-stretch gap-4">
              {/* Counter 1 */}
              <div
                className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center shadow"
                ref={ref1}
                style={{
                  background: "#fff",
                  borderRadius: "1.5rem",
                  minHeight: 220,
                  boxShadow: "0 4px 24px rgba(79,140,255,0.08)",
                  transition: "transform 0.2s",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                  background: "#f2f6fa",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  boxShadow: "0 2px 12px rgba(79,140,255,0.10)"
                }}>
                  <img src={industry} style={{ width: 38, height: 38 }} alt="Industry" />
                </div>
                <h1 className='fw-bold text-success mb-1' style={{ color: "#4f8cff", fontSize: "2.5rem" }}>
                  {start1 && <CountUp end={100} duration={2} />}
                  <span style={{ fontSize: "1.3rem", color: "#000000", marginLeft: 4 }}>+</span>
                </h1>
                <h6 className='fs-6 fw-bold' style={{ color: "#000000", letterSpacing: 1 }}>INDUSTRIES SERVED</h6>
              </div>
              {/* Counter 2 */}
              <div
                className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center shadow"
                ref={ref2}
                style={{
                  background: "#fff",
                  borderRadius: "1.5rem",
                  minHeight: 220,
                  boxShadow: "0 4px 24px rgba(0,196,159,0.08)",
                  transition: "transform 0.2s",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                  background: "#f2f6fa",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  boxShadow: "0 2px 12px rgba(0,196,159,0.10)"
                }}>
                  <img src={market} style={{ width: 38, height: 38 }} alt="Market" />
                </div>
                <h1 className='fw-bold text-success mb-1' style={{ color: "#00C49F", fontSize: "2.5rem" }}>
                  {start2 && <CountUp end={2001} duration={2.5} />}
                  <span style={{ fontSize: "1.3rem", color: "#000000", marginLeft: 4 }}>+</span>
                </h1>
                <h6 className='fs-6 fw-bold' style={{ color: "#000000", letterSpacing: 1 }}>MARKETS ENTRIES</h6>
              </div>
              {/* Counter 3 */}
              <div
                className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center shadow"
                ref={ref3}
                style={{
                  background: "#fff",
                  borderRadius: "1.5rem",
                  minHeight: 220,
                  boxShadow: "0 4px 24px rgba(255,187,40,0.08)",
                  transition: "transform 0.2s",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3" style={{
                  background: "#f2f6fa",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  boxShadow: "0 2px 12px rgba(255,187,40,0.10)"
                }}>
                  <img src={customer} style={{ width: 38, height: 38 }} alt="Customer" />
                </div>
                <h1 className='fw-bold text-success mb-1' style={{ color: "#FFBB28", fontSize: "2.5rem" }}>
                  {start3 && <CountUp end={1045} duration={2} />}
                  <span style={{ fontSize: "1.3rem", color: "#000000", marginLeft: 4 }}>+</span>
                </h1>
                <h6 className='fs-6 fw-bold' style={{ color: "#000000", letterSpacing: 1 }}>HAPPY CUSTOMERS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
