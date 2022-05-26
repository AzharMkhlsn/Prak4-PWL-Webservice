import "./work.scss"
import axios from "axios"
import {Link} from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Container } from 'reactstrap'
const api ='http://localhost:3001'
class Works extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      project:[],
      Response:'',
      display:'none'
    }
  }
  componentDidMount(){
    axios.get(api+'/tampil').then(res=>{
      this.setState({
        project:res.data.values
      })
    })
  }
  render() {
    return (
      <div className="work" id='work'> 
      <Container >
        <h2>LIST PROJECT</h2>
        <hr />
     
          <thead>
            <tr>
        
            </tr>
          </thead>
          <tbody className="body">
            {this.state.project.map(project =>
              <tr key={project.id}>
                <tr><th>{project.nama}</th></tr>
                <br />
                <tr><textarea name="" id="" cols="40" rows="10">{project.isi}</textarea></tr>
                <tr>
                  
                </tr>
                
               

              </tr>
              )}
          </tbody>

       

      </Container>
      </div>
    )
  }
}
export default Works
