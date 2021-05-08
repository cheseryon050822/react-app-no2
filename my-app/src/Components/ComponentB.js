import React,{useReducer,useState} from 'react';
import {Link} from 'react-router-dom';
import {ADD_EVENT, DELETE_ALL_EVENT}from '../actions/index';
import reducer from '../reducer/index';
import {Button,Form,Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ComponentB = () =>{
    const [state,dispatch]=useReducer(reducer,[]);
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    
    const handleClick = (e)=>{
        e.preventDefault();
        dispatch({
            type:ADD_EVENT,
            title,
            body
        });
        setTitle('');
        setBody('');
    };

    const FukuokaDaieiHowks = (f)=>{
        f.preventDefault();
        dispatch({
            type:DELETE_ALL_EVENT,
            title,
            body
        });
        setTitle('');
        setBody('');
    };


    const joumon = () => {
    ("/")
        }
    const  heian= () => {
    ("/ComponentC")
    }
    
    
    return(
        <div>
            <div>ComponentB</div>
            <Link to="/componentc">ComponentCへ移動</Link>
       <Form>
        <Form.Group control="fromBasicPassword">
        <Form.Label>Title</Form.Label>
            <Form.Control
                type="text"
                pleceholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
            <Form.Label>Body</Form.Label>
            <Form.Control
                type="text"
                pleceholder="body"
                value={body}
                onChange={(e)=>setBody(e.target.value)} />
        </Form.Group>
        <Button variant="danger" onClick={handleClick}>
            イベント作成
        </Button>
        <Button variant="primary" onClick={FukuokaDaieiHowks}>
            イベント全削除
        </Button> 
        </Form>
       
        
      
      <div>
      <button onClick={joumon}>ComponentAへ移動</button>
      <button onClick={heian}>ComponentCへ移動</button>  
        </div>
        <h1>Table</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {state.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.body}</td>
                            <td>{data.title}</td>
                            <td>
                             <Button variant="danger">削除</Button>
                            </td>
                        </tr>
                    );
                })}             
            </tbody>
        </Table>
        </div>
     
    );
};

export default ComponentB;