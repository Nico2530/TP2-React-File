import ImagePreview from "./ImagePreview";
import { useState } from "React";
import InputFile from "./InputFile";

function App() {

  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (file) => {
    const url = file !== null ? URL.createObjectURL(file) : null;
    setImageUrl(url);
  };

  return (
    <>
      <h1>TP2-React-File</h1>
      <InputFile handleFileUpload={handleImageUpload} />
      {imageUrl && <ImagePreview imageUrl={imageUrl} />}
    </>
  )
}

export default App
