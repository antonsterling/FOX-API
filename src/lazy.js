const isIntersecting = (entry) => {
    return entry.isIntersecting //True dentro de la pantalla o false por fuera
}

const loadImage = (entry) => {
    console.log('holis');

    const imagen = entry.target;
    console.log("cont: ",imagen);
    const url = imagen.dataset.src;

    //load image
    imagen.src = url;
    //des registra la imagen(unlisten)
    observer.unobserve(imagen);
}

const observer = new IntersectionObserver((entries) =>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};