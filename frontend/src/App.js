import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(()=>event.target.files[0]);
  };

  // console.log(selectedFile);
  const postData = (event) => {
    event.preventDefault()
    const formData = new FormData();
    
    formData.append("File", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:4000/file", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(err=>console.log(err))
  };

  return (
    <div className="App">
      <form onSubmit={postData}>
        <input
          type="file"
          name=""
          id="file"
          accept="application/pdf"
          onChange={changeHandler}
        />
        <button type="submit">
          send
        </button>
      </form>
    </div>
  );
}

export default App;
