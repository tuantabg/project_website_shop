
async function ImageToBase64(file) { 
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((resolve, reaject) => { 
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reaject(err);
    })

    return data;
}

export default ImageToBase64;