window.onload = function () {
  document.getElementById("loading").style.display = "none";
};

async function nopBai() {

  const ten = document.getElementById("projectName").value || "project";

  try {

    // tạo file giả để test upload
    const noiDung = "Bài Scratch của học sinh";

    const base64 = btoa(unescape(encodeURIComponent(noiDung)));

    const response = await fetch(
      "DÁN_LINK_APPS_SCRIPT_WEBAPP_Ở_ĐÂY",
      {
        method: "POST",
        body: JSON.stringify({
          name: ten + ".txt",
          file: base64
        })
      }
    );

    const data = await response.json();

    if(data.status === "success"){
      alert("✅ Đã nộp bài thành công!");
    }else{
      alert("❌ " + data.message);
    }

  } catch(err) {
    alert("❌ Lỗi: " + err);
  }
}
