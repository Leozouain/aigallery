const gridImgs = document.getElementById("photoId");

fetch('db.json')
    .then(res => res.json())
    .then(data => {
        const images = data.photos;
        let photosHTML = '';

        images.forEach(img => {
            const photoHTML = `<a href="${img.imgurl}" target="__blank" class="img-gal" style="background-image: url('${img.imgurl}');" id="${img.id}"></a>`;
            photosHTML += photoHTML;
        });

        gridImgs.innerHTML = photosHTML;
    });