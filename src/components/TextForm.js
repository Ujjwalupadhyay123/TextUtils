import React,{useState} from 'react'

export default function TextForm(props) {

    //ye function button click hone pe call hoga jisme hm functioning add krengey
    const handleUpClick=()=>{
        //console.log("button clicked !")
        setText(text.toUpperCase());
        //setText("you clicked it")
        props.showAlert("Converted to Uppercase!" ,"success")
    }

    const handleloClick=()=>{
        //console.log("button clicked !")
        setText(text.toLowerCase());
        //setText("you clicked it")
        props.showAlert("Converted to Lowercase!" ,"success")
    }

    const handleRevClick=()=>{
        //console.log("button clicked !")
        let newText = ""
        for(let i=text.length-1;i>=0;--i){
            newText+=text[i];
        }
        setText(newText);
        //setText("you clicked it")
        props.showAlert("Text is Reversed!" ,"success")
    }

    const handleClearClick=()=>{
        //console.log("button clicked !")
        let newText = ""
        setText(newText);
        //setText("you clicked it")
        props.showAlert("Text is Cleared!" ,"success")
    }

    //handleOnChange call hoga jab hm text area mein kuch chamge krengey kyunki wo isse associated h see below aur ye ek event receive krega jisse hm text ko set krdenegy
    const handleOnChange=(event)=>{
        //console.log("On change")
        //setText set kredega text ki value jo change krenegy hm
        setText(event.target.value);
    }

    //hm hooks ke var ko aise use krte h first vala value aur second wala function hota h jo update krta h text ko jo const ke baad h 
    //useState ke baad brackets ke under jis ko daalte h usse text initialise hota h
    const [text,setText] = useState("")

    //textarea tag mein value = {text} mein hm default value of text ko value bnake show krte h jahan input krna h
    //onChange function se hm agar koi change krte h text area mein to vo handle krta h vo agar ye nhi use kiya to hm change nhi kr paate textarea mein
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'darkslateblue':'white',color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor:props.darkModeColor}}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloClick} style={{backgroundColor:props.darkModeColor}}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleRevClick} style={{backgroundColor:props.darkModeColor}}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick} style={{backgroundColor:props.darkModeColor}}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.length===0?0:text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    // this is regex in inverted commaas "(/\s+/)" used for a space as well as newline character.
  )
}
