import React, {PureComponent} from 'react'

import axios from 'axios';
import { Container, Row, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import qs from 'querystring';

const api ='http:/localhost:3001'

class Edit extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
                id:this.props.location.state.id,
                nama:this.props.location.state.nama,
                isi:this.props.location.state.isi,
                Response:'',
                display :'none'
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    Ubahproject = (idproject) =>{
        const data = qs.stringify({
            id:idproject,
            nama: this.state.nama,
            isi : this.state.isi

        });

        axios.put(api + '/ubah',data)
        .then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            }
            else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            }
        });

    }
        

  render() {
    return (
        <Container>
        <h4>Ubah data mahasiswa</h4>
        <Alert color="success" style={{ display: this.state.display }}>
            {this.state.response}
        </Alert>
        <Form className="form">
            <Col>
                <Label for="nama">Nama</Label>
                <FormGroup row>
                    <Col>
                        <Input type="text" name="nama" onChange={this.handleChange} value={this.state.nama} placeholder="Masukan Nama" />
                    </Col>
                </FormGroup>
                <Label for="isi">Coment</Label>
                <FormGroup row>
                    <Col>
                        <Input type="text" name="isi" onChange={this.handleChange} value={this.state.isi} placeholder="Masukan Coment" />
                    </Col>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup row>
                    <Row>
                    <Col>
                        <button type="button" onClick={() => this.Ubahproject(this.state.id)} className="btn btn-success">Submit</button>
                    </Col>
                    <Col>
                        <Button color="danger">Reset</Button>{' '}
                    </Col>
                    <Col>
                        <Link to='/project'><Button color="secondary">Kembali</Button></Link>
                    </Col>
                    </Row>
                </FormGroup>
            </Col>
        </Form>
    </Container>
    )
  }
}
export default Edit
