import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Form, Container, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import FullPageLoader from "../common/FullPageLoader";
import Layout from '../common/Layout';
import { Edit } from 'lucide-react';

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        location: '',
        bio: '',
        country: '',
        cityState: '',
        postalCode: '',
        taxId: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setProfile(res.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch profile. Please try again.");
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.put(
                'http://localhost:5000/api/auth/profile',
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            toast.success("Profile updated successfully!");
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <FullPageLoader isDarkTheme={true} />}
            <Layout>
                <Container fluid className="p-0 m-0 vh-100 bg-light">
                    <Row className="justify-content-center">
                        <Col xs={12} lg={10} xl={8}>
                            <Card className="mt-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="fw-bold">Profile</h2>
                                        {/* <Button variant="primary" className="rounded-pill">+ Add Users</Button> */}
                                    </div>

                                    <Card className="mb-4">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <Image src="/api/placeholder/100/100" roundedCircle className="mr-3" style={{width: '64px', height: '64px'}} />
                                                    <div className="ml-3">
                                                        <h4 className="mb-0">{`${profile.firstName} ${profile.lastName}`}</h4>
                                                        <p className="text-muted mb-0">{profile.jobTitle}</p>
                                                        <p className="text-muted mb-0">{profile.location}</p>
                                                    </div>
                                                </div>
                                                <Button variant="link" className="text-primary">
                                                    <Edit size={18} /> Edit
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mb-4">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="fw-bold">Personal Information</h5>
                                                <Button variant="link" className="text-primary">
                                                    <Edit size={18} /> Edit
                                                </Button>
                                            </div>
                                            <Row>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">First Name</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.firstName} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Last Name</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.lastName} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Email address</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.email} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Phone</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.phone} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Bio</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.bio} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="fw-bold">Address</h5>
                                                <Button variant="link" className="text-primary">
                                                    <Edit size={18} /> Edit
                                                </Button>
                                            </div>
                                            <Row>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Country</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.country} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">City/State</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.cityState} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">Postal Code</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.postalCode} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Group>
                                                        <Form.Label className="text-muted">TAX ID</Form.Label>
                                                        <Form.Control plaintext readOnly defaultValue={profile.taxId} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
}