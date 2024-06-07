document.addEventListener('DOMContentLoaded', (event) => {
    const loyiPicture = document.getElementById('loyi-picture');
    const herPicture = document.getElementById('her-picture');
    const sunflower = document.getElementById('sunflower');
    const newVideo = document.getElementById('new-video');
    const note = document.getElementById('note');

    loyiPicture.addEventListener('click', () => {
        note.textContent = 'hi sayaaang! you finally mark another year today and im so thankful that i could be one of the witnesses of you turning 23. i wish we can hold hand to hand on your next birthday hehe.';
        note.classList.add('show');
    });

    herPicture.addEventListener('click', () => {
        note.textContent = 'i hope nothing but for this year brings you closer to the dreams you hold. a good job. a good life. and most importantly, a good wife 😍 (mine of course). i wish all your wishes come true.. except the death wishes for your own self or random people you hate. gaboleh gt yah pls dont easily throw a death wish on someone :)';
    });

    sunflower.addEventListener('click', () => {
        note.textContent = ':3';
        note.classList.add('show');
        sunflower.classList.add('hidden'); 
        newVideo.classList.remove('hidden'); 
        newVideo.play(); 
    });

    newVideo.addEventListener('ended', () => {
        newVideo.classList.add('hidden'); 
        note.textContent = 'cheers to you, my love! :)';
    });

    newVideo.addEventListener('click', () => {
        note.textContent = ':3';
        note.classList.add('show');
    });
})