import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/dashboard.scss";
import SideBar from "../components/sidebar";
import Header from "../components/header";

export default function DashboardLayout({ children }) {
    return (
        <>
        <Header />
            <div className="dashboard_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="inner_main">
                                <div className="left_area">
                                    <SideBar />
                                </div>
                                <div className="right_area">
                                    {children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}