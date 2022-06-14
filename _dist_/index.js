import { registerImage } from "./lazy.js";

const max = 123;
const min = 0;
const randomN = () => Math.floor(Math.random() * (max-min + 1)) + min

const containerImagen = document.getElementById('contenedorImagen')



const createImageNode = () => {
    const image = document.createElement('img');
    image.className = 'imagen';
    image.dataset.src = `https://randomfox.ca/images/${randomN()}.jpg`;
    console.log(image);
    return image;
}

const addImage = () => {
    const newImage = createImageNode();
    containerImagen.append(newImage);
    registerImage(newImage);

}

const deleteImage = () => {
    const allImages = document.querySelector('.imagen');
    if (allImages !== null)
    {
        allImages.remove();
        console.log('se elimino la imagen');
    }
}

const addButton = document.querySelector('#botonAgregar');
addButton.addEventListener("click", addImage);


const deleteButton = document.querySelector('#botonEliminar');
deleteButton.addEventListener("click", deleteImage);


//
