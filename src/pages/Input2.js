import React,{useState} from "react";

const Input2 = () => {
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        phone:""
    }); 

const {name,email,phone} = inputs; //변수를 빼오는것 

const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
        ...inputs, // 깊은 복사 스프레드 복사
        [id]:value
    });

}
    
    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" value={name} id="name" onChange={onChange}></input>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" value={email} id="email" onChange={onChange}></input>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" value={phone} id="phone" onChange={onChange}></input>
            </div>
           <br></br>
           <p>이름 : {name}</p>
           <p>이메일 : {email}</p>
           <p>전화번호: {phone}</p>
        </div>
    )
}

export default Input2; 