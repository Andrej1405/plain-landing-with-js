const img = document.querySelector('.container__image-item');

function _createBlock() {
    const bigBlock = document.createElement('div');

    bigBlock.classList.add('big-block');
    bigBlock.insertAdjacentHTML('afterbegin', `
        <div class="big-block-window" data-close="true">
            <div class="big-block-img" data-close="true">
                
            </div>
        </div>
    `);

    document.body.appendChild(bigBlock);

    const blockBody = document.getElementsByTagName('body')[0];
    blockBody.classList.add('open');

    if(document.querySelector('.body').classList.contains('open')) {
        bigBlock.addEventListener('click', function() {
            blockBody.removeChild(bigBlock);
            blockBody.classList.remove('open');
        });
    }
}



