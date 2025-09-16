const InputFile = ({ handleFileUpload }) => {

    const handleFileChange = (e) => {
        if (e.target.value === '') {
            handleFileUpload(null);
        } else {
            handleFileUpload(e.target.files[0]);
        }
    };

    return (
        <input type="file" name="image" id="imageInput" accept="image/*" onChange={handleFileChange} />
    );
};

export default InputFile;