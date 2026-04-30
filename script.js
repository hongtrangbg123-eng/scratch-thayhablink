function openScratch(){

  window.open(
    "https://scratch.mit.edu/projects/editor/",
    "_blank"
  );

}

async function nopBai(){

  const fileInput =
    document.getElementById("fileInput");

  const file = fileInput.files[0];

  if(!file){
    alert("Chọn file .sb3 trước");
    return;
  }

  const reader = new FileReader();

  reader.onload = async function(){

    const base64 =
      reader.result.split(",")[1];

    try{

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzQuKIQijuW5axdfR9zd8dxj2vAWxQeOH8UdxQefeNQ5Oo7sbII8Lfwc8WXnUWWwqJA2Q/exec",
        {
          method:"POST",
          body:JSON.stringify({
            name:file.name,
            file:base64
          })
        }
      );

      const data = await response.json();

      if(data.status==="success"){
        alert("✅ Đã nộp bài thành công");
      }else{
        alert("❌ "+data.message);
      }

    }catch(err){
      alert("❌ Lỗi: "+err);
    }

  };

  reader.readAsDataURL(file);

}
