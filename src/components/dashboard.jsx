import React from 'react';
import { Col, Row } from "reactstrap";
import TopCards from '../components/dashboard comp/TopCards';
import './style.css';
import Charts from './dashboard comp/Charts';
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    CardSubtitle,
    ListGroupItem,
    Button,
} from "reactstrap";
import Feeds from './dashboard comp/Feeds';
const Dashboard = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                // label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#fa9055',
                tension: 1.5,
            },
        ],
    };
    const data1 = {
        labels: ['14', '15', '16', '17', '18', '19'],
        datasets: [
            {
                // label: 'Dataset 1',
                data: [0, 5, 10, 5, 15, 5],
                fill: false,
                borderColor: '#fff',
                tension: 0.6,
            },
        ],
    };

    const doughnutData = {
        labels: ['OutPatients', 'InPatients'],
        datasets: [
            {
                label: '',
                data: [300, 50],
                backgroundColor: ['#680eda', '#00d89e'],
                hoverOffset: 1,
                cutout: '90%',
            },
        ],
    };
    const doughnutData1 = {
        labels: ['OutPatients', 'InPatients'],
        datasets: [
            {
                label: '',
                data: [100, 50],
                backgroundColor: ['#680eda', '#fa9055'],
                hoverOffset: 1,
                cutout: '90%',
            },
        ],
    };

    const verticalLineData = {
        labels: ['Oct 2019', 'Nov2019', 'Dec 2019', 'Jan 2021', 'Feb 2021', 'Mar 2021'],
        datasets: [
            {
                label: 'OutPatient',
                data: [300, 50, 100],
                backgroundColor: ['#00d89e'],
                hoverOffset: 1,
                cutout: '90%',
            },
            {
                label: 'Inpatient',
                data: [30, 70, 150],
                backgroundColor: ['#680eda'],
                hoverOffset: 1,
                cutout: '90%',
            },
        ],
    };
    return (
        <div style={{ margin: '20px' }}>
            <Row>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Patient"
                        subtitle="Total Patient"
                        earning="3256"
                        icon="bi bi-wallet"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Staffs"
                        subtitle="Available staff"
                        earning="394"
                        icon="bi bi-people-fill"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="Cost"
                        subtitle="Avg Treat.Cost"
                        earning="$2536"
                        icon="bi bi-basket3"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Parking"
                        subtitle="Available Cars"
                        earning="38"
                        icon="bi bi-car-front-fill"
                    />
                </Col>
            </Row>
            <div className="container">
                <div className="row">
                    <div className="verticalDiv">
                        <div style={{ display: 'flex', justifyContent: "space-between", fontWeight: 'bold', height: '40px', borderBottom: "1px solid grey" }}>
                            <span>OutPatients vs. Inpetients Trend</span>
                            <span>show by month ^</span>
                        </div>
                        <div className="vertical">
                            <div>
                                <Charts data={verticalLineData} type="bar" widthx={600} heighty={280} />
                            </div>
                            <div style={{ marginLeft: '80px', marginTop: '36px' }}>
                                <Charts data={doughnutData} type="doughnut" widthx={200} heighty={180} />
                            </div>
                        </div>
                    </div>
                    <div className="vertical1">
                        <div style={{ fontWeight: 'bold', height: '40px', borderBottom: "1px solid grey" }}>
                            <span style={{ marginLeft: '20px' }} >Patients by gender</span>
                        </div>
                        <Charts data={doughnutData1} type="doughnut" widthx={186} heighty={100} />
                    </div>
                </div>
                <div className="row">
                    <div className="column verticalDiv1">
                        <div style={{ display: 'flex', justifyContent: "space-between", fontWeight: 'bold', height: '40px', borderBottom: "1px solid grey" }}>
                            <span>Time Admitted</span>
                            <span>Today^</span>
                        </div>
                        <Charts data={data} type="line" />
                    </div>
                    <div className="column1 verticalDiv1">
                        <Feeds />
                    </div>
                    <div className="column1 verticalDiv2">
                        <span style={{ fontSize: "35px", fontWeight: "bold", color: "white", marginLeft: '20px', marginTop: '20px' }}>3,240</span>
                        <span style={{ color: "white", marginLeft: '20px' }}>Patients this month</span>
                        <div style={{ marginLeft: '-20px', marginTop: '20px' }}>
                            <Charts data={data1} type="line" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
